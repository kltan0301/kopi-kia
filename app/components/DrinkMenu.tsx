"use client";
import { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import AddDrink, { Drink } from "./AddDrink";
import DrinkList from "./DrinkList";
import { DrinkType, DRINK_DEFAULTS } from "../constants";
import KopiImage from "./Kopi";
import TehImage from "./Teh";
import YuanYangImage from "./YuanYang";
import MiloImage from "./Milo";
import { Typography } from "@mui/material";


const DRINK_TO_ICON_MAPPING = [
  { name: 'Kopi', fontSize: 'medium', image: <KopiImage /> },
  { name: 'Teh', fontSize: 'medium', image: <TehImage /> },
  { name: 'Yuan Yang', fontSize: 'small', image: <YuanYangImage /> },
  { name: 'Milo', fontSize: 'medium', image: <MiloImage /> },
];

const drinkMatch = (drink1: Drink, drink2: Drink) => {
  return drink1.strength === drink2.strength
    && drink1.milkiness === drink2.milkiness
    && drink1.sweetness === drink2.sweetness
    && drink1.temperature === drink2.temperature
    && drink1.type === drink2.type;
};

const DrinkMenu = () => {
  const [drinkList, setDrinkList] = useState<Drink[]>([]);
  const [drinkType, setDrinkType] = useState<DrinkType>();

  const addDrink = (newDrink: Drink) => {
    const updatedDrink = {
      ...newDrink,
      milkiness: drinkType === 'Milo' ? 'normal' : newDrink.milkiness,
    };
    const drinkToBeAdded = { ...DRINK_DEFAULTS, ...updatedDrink, type: drinkType };
    setDrinkList((prevList) => [...prevList, drinkToBeAdded]);
  };

  const onListAdd = (drink: Drink) => {
    setDrinkList((prevList) => [...prevList, drink]);
  };

  const onListRemove = (drink: Drink) => {
     setDrinkList((prevList) => {
      const drinkIndex = prevList.findIndex((d) => drinkMatch(d, drink));
      if (drinkIndex === -1) {
        return prevList;
      }
      return [...prevList.slice(0, drinkIndex), ...prevList.slice(drinkIndex + 1)];
     });
  }

  return <>
    <Stack spacing={0.25} direction="row" sx={{ mt: 1, justifyContent: 'center' }}>
      {DRINK_TO_ICON_MAPPING.map(({ name, fontSize, image }) =>
        <Stack direction="column" spacing={0.5} padding={1}>
          <Button key={name}
          variant="outlined"
          onClick={() => setDrinkType(name as DrinkType)}
          sx={{
            color: drinkType === name ? 'white': '#6A7CA8',
            backgroundColor: drinkType === name ? '#293994': '#ADBCD1',
            border: 'none',
            borderRadius: '7px',
            padding: '15px 10px',
            minHeight: '82px',
            // fontSize,
          }}
        >
          {image}
            </Button>
            <Typography variant="subtitle1" sx={{ textAlign: 'center', color: drinkType === name ? '#293994': '#6c757d' }}>{name}</Typography>
        </Stack>)}
    </Stack>
    {drinkType && <AddDrink addDrink={addDrink} drinkType={drinkType} />}
    {drinkList.length > 0 && <>
      <DrinkList drinkList={drinkList} onListAdd={onListAdd} onListRemove={onListRemove}/>
    </>}
    
  </>
};

export default DrinkMenu;
