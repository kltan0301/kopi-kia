import { Drink } from "../components/AddDrink";

export const aggregator = (drinks: Drink[]) => {
   return drinks.reduce((acc, drink) => {
    const variation = drink.variation === 'default' ? '' : drink.variation;
    const sweetness = drink.sweetness === 'normal' ? '' : drink.sweetness;
    const temperature = drink.temperature === 'sio' ? '' : (drink.temperature || '');

    const key = `${drink.type} ${variation} ${sweetness} ${temperature}`;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
}