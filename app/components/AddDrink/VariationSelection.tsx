
import SelectionGroup from '../shared/SelectionGroup';

const VariationSelection = ({ onOptionsChange }: { onOptionsChange: Function }) => {
  return <SelectionGroup onSelect={(value) => onOptionsChange(value)} defaultValue="default" label="Variation" options={
    [
      { label: 'Default', value: 'default' },
      { label: 'O', value: 'o' },
      { label: 'C', value: 'c' },
      { label: 'Gao', value: 'gao' },
      { label: 'Po', value: 'po' },
    ]
  }/>
};

export default VariationSelection;
