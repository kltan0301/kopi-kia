import { Milkiness } from '@/app/constants';
import SelectionGroup from '../shared/SelectionGroup';

type SweetnessProps = {
  onOptionsChange: Function;
  milkiness: Milkiness
};

const SweetnessSelection = ({ onOptionsChange, milkiness }: SweetnessProps) => {
  return <SelectionGroup onSelect={(value) => onOptionsChange(value)} defaultValue="normal" label="Sweetness" options={
    [
      { label: 'Kosong', value: 'kosong', disabled: milkiness === 'normal' },
      { label: 'Siew dai', value: 'siew dai' },
      { label: 'Normal', value: 'normal' },
      { label: 'Ga dai', value: 'ga dai' },
    ]
  }/>
};

export default SweetnessSelection;