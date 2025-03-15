"use client";
import { SetStateAction, useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export type Temperature = "sio" | "peng";

const TemperatureSelection = ({ onOptionsChange }: { onOptionsChange: Function }) => {
  const [temperature, setTemperature] = useState('hot');

  const onHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    const selectedTemperature = event.target.value;
    setTemperature(selectedTemperature);
    onOptionsChange(selectedTemperature);
  }

  return <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Temperature</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        value={temperature}
        onChange={onHandleChange}
      >
        <FormControlLabel value="sio" control={<Radio />} label="Sio" />
        <FormControlLabel value="peng" control={<Radio />} label="Peng" />
      </RadioGroup>
    </FormControl>
};

export default TemperatureSelection;