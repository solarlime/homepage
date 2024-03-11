import {
  describe, expect, test, vi,
} from 'vitest';
import { createElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import {
  fireEvent, waitFor, screen, queryByRole,
} from '@testing-library/react';

import renderWithProviders from '../prepareForTests';
import { en } from '../../src/redux/language/languageSlice';
import App from '../../src/App';

const situations = [`/${import.meta.env.VITE_APP_PLEASE}`, '/'];

describe.each(situations)('Bottom', (path) => {
  test(`Path: ${path}`, async () => {
    renderWithProviders(
      createElement(App, null),
      {
        preloadedState: { language: en },
        router: MemoryRouter,
        props: { initialEntries: [path] },
      },
    );

    const bottom = screen.queryByTestId('bottom');
    expect(bottom).toBeTruthy();

    let button: HTMLElement | null = null;

    switch (path) {
      case `/${import.meta.env.VITE_APP_PLEASE}`: {
        await waitFor(() => {
          button = queryByRole(bottom as HTMLDivElement, 'button');
          expect(button).toBeTruthy();
        });

        const root = await screen.findByRole('application').then((r) => r.parentElement);
        expect(root).toBeTruthy();

        // @ts-ignore
        const pageSpy = vi.spyOn(root, 'scrollTo').mockImplementation(() => {});
        if (button) fireEvent.click(button);

        await waitFor(() => {
          expect(pageSpy).toHaveBeenCalled();
        });
        break;
      }
      default: {
        await waitFor(() => {
          button = queryByRole(bottom as HTMLDivElement, 'link');
          expect(button).toBeTruthy();
          expect(button).toHaveAttribute('href');
        });
        break;
      }
    }
  });
});
