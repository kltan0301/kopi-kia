"use client";
import { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import AddDrink, { Drink } from "./AddDrink";
import DrinkList from "./DrinkList";
import { DrinkType, DRINK_DEFAULTS } from "../constants";

const DRINK_TO_ICON_MAPPING = [
  { name: 'Kopi', fontSize: 'medium' },
  { name: 'Teh', fontSize: 'medium' },
  { name: 'Yuan Yang', fontSize: 'small' },
  { name: 'Milo', fontSize: 'medium' },
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
    if (newDrink.milkiness === 'normal' && newDrink.sweetness === 'kosong' ) {
      alert('Invalid sweetness!');
      return;
    }

    const updatedDrink = { ...newDrink };
    if (drinkType === 'Milo') {
      delete updatedDrink.milkiness;
    }
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
    <Stack spacing={2} direction="row" sx={{ mt: 1, justifyContent: 'center', padding: 1.5 }}>
      {DRINK_TO_ICON_MAPPING.map(({ name, fontSize }) => 
        <Button key={name}
                variant="outlined"
                onClick={() => setDrinkType(name as DrinkType)}
                sx={{
                  color: drinkType === name ? 'white': '#6A7CA8',
                  backgroundColor: drinkType === name ? '#293994': '#EEF0F8',
                  border: 'none',
                  fontSize,
                }}
        >
          {name}
      </Button>)}
    </Stack>
    {drinkType && <>
      <AddDrink addDrink={addDrink} drinkType={drinkType} />
      <Divider variant="middle" sx={{ mt: 2 }}/>
    </>}
    {drinkList.length > 0 && <>
      <DrinkList drinkList={drinkList} onListAdd={onListAdd} onListRemove={onListRemove}/>
    </>}
    
  </>
};

export default DrinkMenu;
