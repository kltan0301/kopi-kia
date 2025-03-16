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
  defaultValue: string;
  options: Option[],
  label: string;
  onSelect: (value: string) => void;
};

const SelectionGroup = ({ defaultValue, options, label, onSelect }: SelectionGroupProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  return <Stack direction="column" spacing={1} padding={0.5}>
      <Typography variant="h6" component="h1" sx={{ color: '#6c757d' }}>{label}</Typography>
      <Stack direction="row" spacing={2}>
        {options.map(({label, value, disabled}, index) => (
          <Chip
            key={index}
            label={label}
            onClick={() => {
              if (disabled) return;
              onSelect(value);
              setSelectedValue(value);
            }}
            sx={{
              fontSize: 'large',
              backgroundColor: disabled ? '#d3d3d3' : (value === selectedValue ? '#7096e1 !important' : '#eceffd'),
              color: disabled ? '#a9a9a9' : (value === selectedValue ? 'white' : '#738eb7'),
              border: 'none'
            }}
          />
        ))}
      </Stack>
    </Stack>
};

export default SelectionGroup;
