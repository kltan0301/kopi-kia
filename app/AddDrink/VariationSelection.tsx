"use client";
import { SetStateAction, useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export type Variation = "default" | "o" | "c" | "gao" | "po";

const VariantSelection = ({ onOptionsChange }: { onOptionsChange: Function }) => {
  const [variation, setVariation] = useState('default');

  const onHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    const selectedVariation = event.target.value;
    setVariation(selectedVariation);
    onOptionsChange(selectedVariation);
  }

  return <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Variation</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        value={variation}
        onChange={onHandleChange}
      >
        <FormControlLabel value="default" control={<Radio />} label="Default" />
        <FormControlLabel value="o" control={<Radio />} label="O" />
        <FormControlLabel value="c" control={<Radio />} label="C" />
        <FormControlLabel value="gao" control={<Radio />} label="Gao" />
        <FormControlLabel value="po" control={<Radio />} label="Po" />
      </RadioGroup>
    </FormControl>
};

export default VariantSelection;