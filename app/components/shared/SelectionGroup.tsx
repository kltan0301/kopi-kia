import { Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useState } from "react";

type Option = {
  label: string;
  value: string;
  disabled?: boolean;
}

type SelectionGroupProps = {
  options: Option[],
  label: string;
  onSelect: (value: string) => void;
  selectedValue: string;
};

const SelectionGroup = ({ options, label, onSelect, selectedValue }: SelectionGroupProps) => {
  return <Stack direction="column" spacing={1} padding={0.5}>
      <Typography variant="h6" component="h1" sx={{ color: '#6c757d' }}>{label}</Typography>
      <Stack direction="row" spacing={1.5}>
        {options.map(({label, value, disabled}, index) => (
          <Chip
            key={index}
            label={label}
            onClick={() => {
              if (disabled) return;
              onSelect(value);
            }}
            sx={{
              fontSize: 'large',
              backgroundColor: disabled ? '#E0E0E0' : (value === selectedValue ? '#293994 !important' : '#ECEFFE'),
              color: disabled ? 'white' : (value === selectedValue ? 'white' : '#6A7CA8'),
              border: 'none'
            }}
          />
        ))}
      </Stack>
    </Stack>
};

export default SelectionGroup;
