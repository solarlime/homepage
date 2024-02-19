import type { CSSProperties } from 'react';

export interface ExtendedCSS extends CSSProperties {
  '--button-color': string,
  '--hover-color': string,
  '--hover-bg-color': string,
  '--focus-color': string,
  '--extra-color': string,
  '--green-color': string,
  '--not-green-color': string,
}
