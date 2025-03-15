"use client";
import { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugSaucer, faMugHot, faWhiskeyGlass } from "@fortawesome/free-solid-svg-icons";
import AddDrink, { Drink } from "./AddDrink";

const DRINK_TO_ICON_MAPPING = [
  { name: 'Kopi', icon: faMugSaucer },
  { name: 'Teh', icon: faMugHot },
  { name: 'Milo', icon: faWhiskeyGlass },
];

const DrinkMenu = () => {
  const [drinkList, setDrinkList] = useState<Drink[]>([]);

  const addDrink = (newDrink: Drink) => {
    setDrinkList((prevList) => [...prevList, newDrink]);
  };

  return <>
    <Stack spacing={3} direction="row">
      {DRINK_TO_ICON_MAPPING.map(({ name, icon }) => <Button key={name} variant="contained">
        {name}
        <FontAwesomeIcon icon={icon}  size="2x" />
      </Button>)}
    </Stack>
    <AddDrink addDrink={addDrink} />
    {drinkList.map((drink, index) => <div key={index}>{index}.{drink.type}, {drink.sweetness}, {drink.temperature}</div>)}
  </>
};

export default DrinkMenu;