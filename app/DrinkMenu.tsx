"use client";
import { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugSaucer, faMugHot, faWhiskeyGlass } from "@fortawesome/free-solid-svg-icons";
import DrinkOptions from "./DrinkOptions";
import type { DrinkType } from "./DrinkOptions";

const DRINK_TO_ICON_MAPPING = [
  { name: 'Kopi', icon: faMugSaucer },
  { name: 'Teh', icon: faMugHot },
  { name: 'Milo', icon: faWhiskeyGlass },
];

const DrinkMenu = () => {
  const [drink, setDrink] = useState('Kopi');
  const [drinkType, setDrinkSelection] = useState<DrinkType>();

  return <>
    <Stack spacing={3} direction="row">
      {DRINK_TO_ICON_MAPPING.map(({ name, icon }) => <Button variant="contained" onClick={() => setDrink(name)}>
        {name}
        <FontAwesomeIcon icon={icon}  size="2x" />
      </Button>)}
    </Stack>
    <DrinkOptions setDrinkType={(type: DrinkType) => { setDrinkSelection(type) }}/>
    <p>{drink} {drinkType}</p>
  </>
};

export default DrinkMenu;