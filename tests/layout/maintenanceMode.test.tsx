import {
  describe, expect, test, beforeEach,
} from 'vitest';
import { createElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { waitFor } from '@testing-library/react';

import renderWithProviders from '../prepareForTests';
import App from '../../src/App';
import { en } from '../../src/redux/language/languageSlice';

type Situation = { maintenance: boolean, path: string, searchFor: string };

const situations: Situation[] = [
  { maintenance: false, path: '/', searchFor: 'Jj' },
  { maintenance: false, path: '/random-string', searchFor: '404' },
  { maintenance: false, path: `/${import.meta.env.VITE_APP_PLEASE}`, searchFor: 'Bb' },
  { maintenance: true, path: '/', searchFor: 'Wow!' },
  { maintenance: true, path: '/random-string', searchFor: 'Wow!' },
  { maintenance: true, path: `/${import.meta.env.VITE_APP_PLEASE}`, searchFor: 'Bb' },
];

describe.each(situations)('Page resolving', ({ maintenance, path, searchFor }: Situation) => {
  beforeEach(() => {
    import.meta.env.VITE_APP_MAINTENANCE_MODE = maintenance;
  });

  test(`Maintenance: ${maintenance} & path: ${path}`, async () => {
    const { getByText } = renderWithProviders(
      createElement(App, null),
      {
        preloadedState: { language: en },
        router: MemoryRouter,
        props: { initialEntries: [path] },
      },
    );

    await waitFor(() => {
      const content = getByText(searchFor);
      expect(content).toBeInTheDocument();
    });
  });
});
