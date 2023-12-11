import React from 'react';

export interface ExtendedCSS extends React.CSSProperties {
  '--button-color': string,
  '--hover-color': string,
  '--hover-bg-color': string,
  '--focus-color': string,
  '--extra-color': string,
}
