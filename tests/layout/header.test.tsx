import {
  describe, expect, test, vi,
} from 'vitest';
import { createElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, waitFor } from '@testing-library/react';

import renderWithProviders from '../prepareForTests';
import Header from '../../src/components/Header/Header';
import { en } from '../../src/redux/language/languageSlice';

const situations = [`/${import.meta.env.VITE_APP_PLEASE}`, '/random-string'];

type Buttons<T extends string> = { [key in T]: HTMLElement | null };

describe.each(situations)('Header', (path) => {
  test(`Path: ${path}`, async () => {
    const { queryByText } = renderWithProviders(
      createElement(Header, null),
      {
        preloadedState: { language: en },
        router: MemoryRouter,
        props: { initialEntries: [path] },
      },
    );

    const buttons: Buttons<'first' | 'second'> = {
      first: null,
      second: null,
    };

    // Vitest error: cannot spy on a non-function value (since happy-dom ^15)
    // @ts-ignore
    // vi.spyOn(document.documentElement, 'clientWidth').mockImplementation(() => 1024);
    Object.defineProperty(HTMLElement.prototype, 'clientWidth', { configurable: true, value: 1024 });
    const printSpy = vi.spyOn(window, 'print').mockImplementation(() => {});

    switch (path) {
      case `/${import.meta.env.VITE_APP_PLEASE}`: {
        const response = await fetch('/api/en/header');
        const content = await response.json();
        await waitFor(() => {
          buttons.first = queryByText(content?.download);
          expect(buttons.first).toBeVisible();

          buttons.second = queryByText(content?.print);
          expect(buttons.second).toBeVisible();
        });

        // Try to print
        fireEvent.click(buttons.second as HTMLButtonElement);
        await waitFor(() => {
          expect(printSpy).toHaveBeenCalledOnce();
        }, { timeout: 1500 });

        // Try to download (fail)
        fireEvent.click(buttons.first as HTMLButtonElement);
        expect(buttons.first).toBeDisabled();
        break;
      }
      default: {
        await waitFor(() => {
          buttons.first = queryByText('github');
          expect(buttons.first).toBeVisible();
          expect(buttons.first).toHaveAttribute('href');

          buttons.second = queryByText('telegram');
          expect(buttons.second).toBeVisible();
          expect(buttons.second).toHaveAttribute('href');
        });
        break;
      }
    }
  });
});
