"use client";
import { useState } from "react";
import VariationSelection, { Variation } from "./VariationSelection";
import TemperatureSelection, { Temperature } from "./TemperatureSelection";
import SweetnessSelection, { Sweetness } from "./SweetnessSelection";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export type Drink = {
  variation?: Variation;
  temperature?: Temperature;
  sweetness?: Sweetness;
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

  return <Stack spacing={2}>
    <VariationSelection onOptionsChange={(variation: Variation) => { onOptionsChange({ variation }) }}/>
    <SweetnessSelection onOptionsChange={(sweetness: Sweetness) => { onOptionsChange({ sweetness }) }}/>
    <TemperatureSelection onOptionsChange={(temperature: Temperature) => { onOptionsChange({ temperature }) }}/>

    <Button onClick={() => { addDrink(drink)}}>Add</Button>
  </Stack>
};

export default AddDrink;