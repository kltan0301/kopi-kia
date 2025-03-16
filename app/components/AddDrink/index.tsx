"use client";
import { useState } from "react";
import { Temperature, Sweetness, Strength, Milkiness, DrinkType } from "../../constants";
import TemperatureSelection from "./TemperatureSelection";
import SweetnessSelection from "./SweetnessSelection";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import StrengthSelection from './StrengthSelection';
import MilkinessSelection from './MilkinessSelection';

export type Drink = {
  milkiness?: Milkiness;
  strength?: Strength;
  temperature?: Temperature;
  sweetness?: Sweetness;
  type?: DrinkType;
}

type AddDrinkProps = {
  addDrink: (newDrink: Drink) => void;
  drinkType: DrinkType;
};

const AddDrink = ({ addDrink, drinkType }: AddDrinkProps) => {
  const [drink, setDrink] = useState<Drink>({});

  const onOptionsChange = (updatedOptions: Drink) => {
    setDrink((prevDrink) => ({
      ...prevDrink,
      ...updatedOptions,
    }));
  }

  return <Stack spacing={2} mt={2} pl={1.5} pr={1.5}>
    {drinkType !== 'Milo' && <>
      <MilkinessSelection onOptionsChange={(milkiness: Milkiness) => { onOptionsChange({ milkiness }) }}/>
      <Divider variant="middle" sx={{ mt: 2 }}/>
    </>}
    <StrengthSelection onOptionsChange={(strength: Strength) => { onOptionsChange({ strength }) }}/>
    <Divider variant="middle" sx={{ mt: 2 }}/>
    <SweetnessSelection milkiness={drink.milkiness || 'normal'} onOptionsChange={(sweetness: Sweetness) => { onOptionsChange({ sweetness }) }}/>
    <Divider variant="middle" sx={{ mt: 2 }}/>
    <TemperatureSelection onOptionsChange={(temperature: Temperature) => { onOptionsChange({ temperature }) }}/>

    <Button sx={{
      border: 'none',
      color: 'white',
      borderRadius: '5px',
      margin: '25px 10px 20px 10px !important',
      backgroundColor: '#293994',
      fontSize: 'large'
    }} onClick={() => { addDrink(drink)}}>Add</Button>
  </Stack>
};

export default AddDrink;