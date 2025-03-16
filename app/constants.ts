export type DrinkType = 'Kopi' | 'Teh' | 'Milo' | 'Yuan Yang';
export type Sweetness = 'kosong' | 'siew dai' | 'normal' | 'ga dai';
export type Temperature = 'sio' | 'peng';
export type Strength = 'default' | 'gao' | 'po';
export type Milkiness = 'normal' | 'o' | 'c';

export const DRINK_DEFAULTS = {
  strength: 'default' as Strength,
  sweetness: 'normal' as Sweetness,
  temperature: 'sio' as Temperature,
  milkiness: 'normal' as Milkiness,
};
