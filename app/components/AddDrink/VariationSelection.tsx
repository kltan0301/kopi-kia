
import { DrinkType, DRINK_TO_VARIATION_MAPPING } from '@/app/constants';
import SelectionGroup from '../shared/SelectionGroup';

type VariationSelectionProps = {
  onOptionsChange: Function;
  drinkType: DrinkType
}

const VariationSelection = ({ onOptionsChange, drinkType }: VariationSelectionProps) => {
  const drinkVariations = DRINK_TO_VARIATION_MAPPING[drinkType];
  return drinkVariations && <SelectionGroup onSelect={(value) => onOptionsChange(value)} defaultValue="default" label="Variation" options={
    drinkVariations.map((variation) => ({ label: variation.charAt(0).toUpperCase() + variation.slice(1), value: variation }))
    }/>
};

export default VariationSelection;
