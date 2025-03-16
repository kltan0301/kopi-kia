import { Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useState } from "react";

type Option = {
  label: string;
  value: string;
}

type SelectionGroupProps = {
  defaultValue: string;
  options: Option[],
  label: string;
  onSelect: (value: string) => void;
};

const SelectionGroup = ({ defaultValue, options, label, onSelect }: SelectionGroupProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  return <Stack direction="column" spacing={1} padding={0.5}>
      <Typography variant="h6" component="h1" sx={{ color: '#6c757d' }}>{label}</Typography>
      <Stack direction="row" spacing={1}>
        {options.map(({label, value}) => (
          <Chip
            label={label}
            onClick={() => {
              onSelect(value);
              setSelectedValue(value);
            }}
            sx={{
              fontSize: 'large',
              backgroundColor: value === selectedValue ? '#7096e1 !important' : '#eceffd',
              color: value === selectedValue ? 'white' : '#738eb7',
              border: 'none'
            }}
          />
        ))}
        {/* <Chip label="Default" onClick={() => {}} sx={{ backgroundColor: '#7096e1', color: 'white' }} />
        <Chip label="O" variant="outlined" sx={ { backgroundColor: '#eceffd', border: 'none', color: '#738eb7' }} onClick={() => {}} />
        <Chip label="C" variant="outlined" sx={ { backgroundColor: '#eceffd', border: 'none', color: '#738eb7' }} onClick={() => {}} />
        <Chip label="Gao" variant="outlined" sx={ { backgroundColor: '#eceffd', border: 'none', color: '#738eb7' }} onClick={() => {}} />
        <Chip label="Po" variant="outlined" sx={ { backgroundColor: '#eceffd', border: 'none', color: '#738eb7' }} onClick={() => {}} /> */}
      </Stack>
    </Stack>
};

export default SelectionGroup;
