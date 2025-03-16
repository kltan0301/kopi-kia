import SelectionGroup from '../shared/SelectionGroup';

const SweetnessSelection = ({ onOptionsChange }: { onOptionsChange: Function }) => {
  return <SelectionGroup onSelect={(value) => onOptionsChange(value)} defaultValue="normal" label="Sweetness" options={
    [
      { label: 'Kosong', value: 'kosong' },
      { label: 'Siew dai', value: 'siew dai' },
      { label: 'Normal', value: 'normal' },
      { label: 'Ga dai', value: 'ga dai' },
    ]
  }/>
};

export default SweetnessSelection;