
import SelectionGroup from '../shared/SelectionGroup';

type MilkinesstionProps = {
  onOptionsChange: Function;
}

const MilkinessSelection = ({ onOptionsChange }: MilkinesstionProps) => {
  return <SelectionGroup onSelect={(value) => onOptionsChange(value)} defaultValue="normal" label="Milkiness" options={
    [
      { label: 'O', value: 'O' },
      { label: 'Normal', value: 'normal' },
      { label: 'C', value: 'C' },
    ]
  }/>
};

export default MilkinessSelection;
