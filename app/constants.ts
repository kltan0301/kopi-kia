export type DrinkType = 'Kopi' | 'Teh' | 'Milo' | 'Yuan Yang';
export type Sweetness = 'kosong' | 'siew dai' | 'normal' | 'ga dai';
export type Temperature = 'sio' | 'peng';
export type Variation = 'default' | 'o' | 'c' | 'gao' | 'po';

export const DRINK_DEFAULTS = {
  variation: 'default' as Variation,
  sweetness: 'normal' as Sweetness,
  temperature: 'sio' as Temperature,
}

export const DRINK_TO_VARIATION_MAPPING: Record<DrinkType, Variation[]> = {
  Kopi: ['default', 'o', 'c', 'gao', 'po'],
  'Yuan Yang': ['default', 'o', 'c', 'gao', 'po'],
  Teh: ['default', 'o', 'c', 'gao', 'po'],
  Milo: ['default', 'gao'],
}