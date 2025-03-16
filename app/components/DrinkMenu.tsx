"use client";
import { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import AddDrink, { Drink } from "./AddDrink";
import DrinkList from "./DrinkList";
import { DrinkType, DRINK_DEFAULTS } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";

const DRINK_TO_ICON_MAPPING = [
  { name: 'Kopi', fontSize: 'medium' },
  { name: 'Teh', fontSize: 'medium' },
  { name: 'Yuan Yang', fontSize: 'small' },
  { name: 'Milo', fontSize: 'medium' },
];

const DrinkMenu = () => {
  const [drinkList, setDrinkList] = useState<Drink[]>([]);
  const [drinkType, setDrinkType] = useState<DrinkType>();

  const addDrink = (newDrink: Drink) => {
    const drinkToBeAdded = { ...DRINK_DEFAULTS, ...newDrink, type: drinkType };
    setDrinkList((prevList) => [...prevList, drinkToBeAdded]);
  };

  const removeDrink = (index: number) => {
    setDrinkList((prevList) => prevList.filter((_, i) => i !== index));
  };

  return <>
    <Stack spacing={2} direction="row" sx={{ mt: 2, justifyContent: 'center', pt: 1.5, pb: 1.5 }}>
      {DRINK_TO_ICON_MAPPING.map(({ name, fontSize }) => 
        <Button key={name}
                variant="outlined"
                onClick={() => setDrinkType(name as DrinkType)}
                sx={{
                  color: drinkType === name ? 'white': '#495057',
                  backgroundColor: drinkType === name ? '#072AC8': '#dee2e6',
                  borderColor: drinkType === name ? '#758ECD': '#dee2e6',
                  fontSize,
                }}
        >
          {name}
          {/* <Stack direction="column" spacing={1}>
            <FontAwesomeIcon icon={faMugHot} size="3x" />
            {name}
          </Stack> */}
      </Button>)}
    </Stack>
    {drinkType && <>
      <AddDrink addDrink={addDrink} />
    </>}
    {drinkList.length > 0 && <>
      <Divider variant="middle" sx={{ mt: 2 }}/>
      <DrinkList drinkList={drinkList} onDelete={(index) => removeDrink(index) }/>
    </>}
    
  </>
};

export default DrinkMenu;
