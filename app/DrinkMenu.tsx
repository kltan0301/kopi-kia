"use client";
import { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugSaucer, faMugHot, faWhiskeyGlass } from "@fortawesome/free-solid-svg-icons";
import AddDrink, { Drink } from "./AddDrink";
import { aggregator } from './utils/aggregator';

export type DrinkType = 'Kopi' | 'Teh' | 'Milo';

const DRINK_TO_ICON_MAPPING = [
  { name: 'Kopi', icon: faMugSaucer },
  { name: 'Teh', icon: faMugHot },
  { name: 'Milo', icon: faWhiskeyGlass },
];

const DrinkMenu = () => {
  const [drinkList, setDrinkList] = useState<Drink[]>([]);
  const [drinkType, setDrinkType] = useState<DrinkType>();

  const addDrink = (newDrink: Drink) => {
    setDrinkList((prevList) => [...prevList, {...newDrink, type: drinkType }]);
  };

  return <>
    <Stack spacing={3} direction="row">
      {DRINK_TO_ICON_MAPPING.map(({ name, icon }) => <Button key={name} variant="contained" onClick={() => setDrinkType(name as DrinkType)} sx={{ backgroundColor: drinkType === name ? 'orange': 'blue' }}>
        {name}
        <FontAwesomeIcon icon={icon}  size="2x" />
      </Button>)}
    </Stack>
    {drinkType && <>
      <AddDrink addDrink={addDrink} />
      {Object.entries(aggregator(drinkList)).map(([drinkString, count], index) => {
        return <div key={index}>
          {drinkString} - {count}
        </div>
      })}
    </>}
  </>
};

export default DrinkMenu;