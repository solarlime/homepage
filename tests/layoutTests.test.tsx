import {
  describe, expect, test, beforeEach, beforeAll, afterEach, afterAll,
} from 'vitest';
import { createElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { cleanup, waitFor } from '@testing-library/react';

import renderWithProviders from './prepareForTests';
import App from '../src/App';
import { en } from '../src/redux/language/languageSlice';
import { server } from './server';

const serverInstance = server();

beforeAll(() => {
  serverInstance.listen();
});

afterEach(() => {
  cleanup();
  serverInstance.resetHandlers();
});

afterAll(async () => {
  serverInstance.close();
});

type Situation = { maintenance: boolean, path: string, searchFor: string };

const situations: Situation[] = [
  { maintenance: false, path: '/', searchFor: 'Hi! I am' },
  { maintenance: false, path: '/random-string', searchFor: '404' },
  { maintenance: false, path: `/${import.meta.env.VITE_APP_PLEASE}`, searchFor: 'Tools' },
  { maintenance: true, path: '/', searchFor: 'Wow!' },
  { maintenance: true, path: '/random-string', searchFor: 'Wow!' },
  { maintenance: true, path: `/${import.meta.env.VITE_APP_PLEASE}`, searchFor: 'Tools' },
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
