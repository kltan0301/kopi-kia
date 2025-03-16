
import SelectionGroup from '../shared/SelectionGroup';

type StrengthProps = {
  onOptionsChange: Function;
}

const StrengthSelection = ({ onOptionsChange }: StrengthProps) => {
  return  <SelectionGroup onSelect={(value) => onOptionsChange(value)} defaultValue="default" label="Strength" options={[
    { label: 'Default', value: 'default' },
    { label: 'Gao', value: 'gao' },
    { label: 'Po', value: 'po' },
  ]}/>
};

export default StrengthSelection;
