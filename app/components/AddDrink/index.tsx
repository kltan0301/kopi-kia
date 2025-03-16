"use client";
import { useState } from "react";
import { Temperature, Sweetness, Variation, DrinkType } from "../../constants";
import TemperatureSelection from "./TemperatureSelection";
import SweetnessSelection from "./SweetnessSelection";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import VariationSelection from './VariationSelection';

export type Drink = {
  variation?: Variation;
  temperature?: Temperature;
  sweetness?: Sweetness;
  type?: DrinkType;
}

type AddDrinkProps = {
  addDrink: (newDrink: Drink) => void;
};

const AddDrink = ({ addDrink }: AddDrinkProps) => {
  const [drink, setDrink] = useState<Drink>({});

  const onOptionsChange = (updatedOptions: Drink) => {
    setDrink((prevDrink) => ({
    ...prevDrink,
    ...updatedOptions,
  }));
  }

  return <Stack spacing={2} mt={2}>
    <VariationSelection onOptionsChange={(variation: Variation) => { onOptionsChange({ variation }) }}/>
    <SweetnessSelection onOptionsChange={(sweetness: Sweetness) => { onOptionsChange({ sweetness }) }}/>
    <TemperatureSelection onOptionsChange={(temperature: Temperature) => { onOptionsChange({ temperature }) }}/>

    <Button onClick={() => { addDrink(drink)}} sx={{ fontSize: 'large' }}>Add</Button>
  </Stack>
};

export default AddDrink;