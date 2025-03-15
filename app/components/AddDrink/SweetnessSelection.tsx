"use client";
import { SetStateAction, useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export type Sweetness = "kosong" | "siew dai" | "normal" | "ga dai";

const SweetnessSelection = ({ onOptionsChange }: { onOptionsChange: Function }) => {
  const [sweetness, setSweetness] = useState('hot');

  const onHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    const selectedSweetness = event.target.value;
    setSweetness(selectedSweetness);
    onOptionsChange(selectedSweetness);
  }

  return <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Sweetness</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        value={sweetness}
        onChange={onHandleChange}
      >
        <FormControlLabel value="kosong" control={<Radio />} label="Kosong" />
        <FormControlLabel value="siew dai" control={<Radio />} label="Siew dai" />
        <FormControlLabel value="normal" control={<Radio />} label="Normal" />
        <FormControlLabel value="ga dai" control={<Radio />} label="Ga dai" />
      </RadioGroup>
    </FormControl>
};

export default SweetnessSelection;