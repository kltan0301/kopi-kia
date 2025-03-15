"use client";
import { SetStateAction, useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export type DrinkType = "default" | "o" | "c" | "gao" | "po";

const DrinkOptions = ({ setDrinkType }: { setDrinkType: Function }) => {
  const [value, setValue] = useState('default');

  const onHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    const drinkType = event.target.value; 
    setValue(drinkType);
    setDrinkType(drinkType);
  }

  return <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
      {value}
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="default"
        name="radio-buttons-group"
        value={value}
        onChange={onHandleChange}
      >
        <FormControlLabel value="default" control={<Radio />} label="Default" />
        <FormControlLabel value="o" control={<Radio />} label="O" />
        <FormControlLabel value="c" control={<Radio />} label="C" />
        <FormControlLabel value="gao" control={<Radio />} label="gao" />
        <FormControlLabel value="po" control={<Radio />} label="po" />
      </RadioGroup>
    </FormControl>
};

export default DrinkOptions;