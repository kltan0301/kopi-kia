import { Drink } from "../components/AddDrink";

type AggregatorValue = {
  count: number;
  drink: Drink;
}

export const aggregator = (drinks: Drink[]): Record<string, AggregatorValue> => {
  return drinks.reduce((acc, drink) => {
    const strength = drink.strength === 'default' ? '' : drink.strength;
    const milkiness = drink.type === 'Milo' ? null : (drink.milkiness === 'normal' ? '' : drink.milkiness);
    const sweetness = drink.sweetness === 'normal' ? '' : drink.sweetness;
    const temperature = drink.temperature === 'sio' ? '' : drink.temperature;

    const key = [drink.type, milkiness, strength, sweetness, temperature].filter(Boolean).join(' ');
    acc[key] = acc[key] ? { ...acc[key], count: acc[key].count + 1 } : { count: 1, drink };
    return acc;
  }, {} as Record<string, AggregatorValue>);
}
