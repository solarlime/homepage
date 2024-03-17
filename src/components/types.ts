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

export interface PageComponent {
  [key: string]: string,
}

const pages = ['intro', 'tagCloud', 'about', 'notFound', 'footer', 'header'] as const;
export type Pages = typeof pages[number];
