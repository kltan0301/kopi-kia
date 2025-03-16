import { Drink } from "../components/AddDrink";

type AggregatorValue = {
  count: number;
  drink: Drink;
}

export const aggregator = (drinks: Drink[]): Record<string, AggregatorValue> => {
  return drinks.reduce((acc, drink) => {
    const variation = drink.variation === 'default' ? '' : drink.variation;
    const sweetness = drink.sweetness === 'normal' ? '' : drink.sweetness;
    const temperature = drink.temperature === 'sio' ? '' : drink.temperature;

    const key = `${drink.type} ${variation} ${sweetness} ${temperature}`;
    acc[key] = acc[key] ? { ...acc[key], count: acc[key].count + 1 } : { count: 1, drink };
    return acc;
  }, {} as Record<string, AggregatorValue>);
}
