import SelectionGroup from '../shared/SelectionGroup';

const TemperatureSelection = ({ onOptionsChange }: { onOptionsChange: Function }) => {
  return <SelectionGroup onSelect={(value) => onOptionsChange(value)} defaultValue="sio" label="Temperature" options={
    [
      { label: 'Sio', value: 'sio' },
      { label: 'Peng', value: 'peng' },
    ]
  }/>
};

export default TemperatureSelection;