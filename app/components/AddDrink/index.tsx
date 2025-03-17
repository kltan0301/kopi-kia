"use client";
import { useState } from "react";
import { Temperature, Sweetness, Strength, Milkiness, DrinkType } from "../../constants";
import SelectionGroup from '../shared/SelectionGroup';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

const DEFAULT_DRINK: Drink = {
  milkiness: 'normal' as Milkiness,
  strength: 'default' as Strength,
  temperature: 'sio' as Temperature,
  sweetness: 'normal' as Sweetness,
};

export type Drink = {
  milkiness: Milkiness;
  strength: Strength;
  temperature: Temperature;
  sweetness: Sweetness;
  type?: DrinkType;
}

type AddDrinkProps = {
  addDrink: (newDrink: Drink) => void;
  drinkType: DrinkType;
};

interface UpdatedOptions {
  milkiness?: Milkiness;
  strength?: Strength;
  temperature?: Temperature;
  sweetness?: Sweetness;
}

const STRENGTH_OPTIONS = [
  { label: 'Default', value: 'default' },
  { label: 'Gao', value: 'gao' },
  { label: 'Po', value: 'po' },
];

const SWEETNESS_OPTIONS = [
  { label: 'Siew dai', value: 'siew dai' },
  { label: 'Normal', value: 'normal' },
  { label: 'Ga dai', value: 'ga dai' },
];

const TEMPERATURE_OPTIONS =  [
  { label: 'Sio', value: 'sio' },
  { label: 'Peng', value: 'peng' },
];

const MILKINESS_OPTIONS = [
  { label: 'O', value: 'O' },
  { label: 'Normal', value: 'normal' },
  { label: 'C', value: 'C' },
];

const AddDrink = ({ addDrink, drinkType }: AddDrinkProps) => {
  const [drink, setDrink] = useState<Drink>({...DEFAULT_DRINK, type: drinkType});

  const onOptionsChange = (updatedOptions: UpdatedOptions) => {
    setDrink((prevDrink) => ({
      ...prevDrink,
      ...updatedOptions,
      sweetness: updatedOptions.milkiness === 'normal' && prevDrink.sweetness === 'kosong' ? 'normal' : updatedOptions.sweetness ?? prevDrink.sweetness
    }));
  }

  return <Stack spacing={2} mt={2} pl={1.5} pr={1.5}>
    {drinkType !== 'Milo' && <>
      <SelectionGroup
        selectedValue={drink.milkiness}
        onSelect={(milkiness) => onOptionsChange({ milkiness: milkiness as Milkiness })}
        label="Milkiness"
        options={MILKINESS_OPTIONS}
      />
      <Divider variant="middle" sx={{ mt: 2 }}/>
    </>}
    <SelectionGroup
      selectedValue={drink.strength}
      onSelect={(strength) => onOptionsChange({ strength: strength as Strength })}
      label="Strength"
      options={STRENGTH_OPTIONS}
    />
    <Divider variant="middle" sx={{ mt: 2 }}/>
    <SelectionGroup
      selectedValue={drink.sweetness}
      onSelect={(sweetness) => onOptionsChange({ sweetness: sweetness as Sweetness })}
      label="Sweetness"
      options={
        [
          { label: 'Kosong', value: 'kosong', disabled: drink.milkiness === 'normal' },
          ...SWEETNESS_OPTIONS,
        ]
      }
    />
    <Divider variant="middle" sx={{ mt: 2 }}/>
    <SelectionGroup
      selectedValue={drink.temperature}
      onSelect={(temperature) => onOptionsChange({ temperature: temperature as Temperature })}
      label="Temperature"
      options={TEMPERATURE_OPTIONS}/>

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