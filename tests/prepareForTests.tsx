import { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import type { ReactElement } from 'react';
import type { RenderOptions } from '@testing-library/react';
import type { AppStore, RootState } from '../src/redux/app/store';

import { setupStore } from '../src/redux/app/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>,
  store?: AppStore,
}

const renderWithProviders = (
  ui: ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions,
) => {
  function Wrapper({ children }: PropsWithChildren<{}>): ReactElement {
    return <BrowserRouter><Provider store={store}>{children}</Provider></BrowserRouter>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export default renderWithProviders;
