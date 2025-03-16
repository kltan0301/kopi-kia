export type DrinkType = 'Kopi' | 'Teh' | 'Milo';
export type Sweetness = 'kosong' | 'siew dai' | 'normal' | 'ga dai';
export type Temperature = 'hot' | 'cold';
export type Variation = 'default' | 'o' | 'c' | 'gao' | 'po';

export const DRINK_DEFAULTS = {
  variation: 'default' as Variation,
  sweetness: 'normal' as Sweetness,
  temperature: 'sio' as Temperature,
}
