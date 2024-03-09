import { http, HttpResponse } from 'msw';
import { fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { createElement } from 'react';
import { MemoryRouter } from 'react-router-dom';

import renderWithProviders from '../prepareForTests';
import { en, ru } from '../../src/redux/language/languageSlice';
import App from '../../src/App';
import { darkTheme, lightTheme } from '../../src/redux/theme/themeSlice';
import { unsplashResult } from '../mocks/handlers';
import server from '../mocks/server';

describe.each([ru, en])('Testing content resolving: %s', (language) => {
  test.each(['about', 'intro', 'notFound'])(`/${language.name}/%s`, async (component) => {
    const response = await fetch(`/api/${language.name}/${component}`);
    const content = await response.json();
    const expected = Object.values(content)[0] as string;
    const componentName = component[0].toUpperCase() + component.slice(1);
    const componentElement = await import(`../../src/components/${componentName}/${componentName}`).then((esm) => esm.default);
    const { findByText } = renderWithProviders(
      createElement(componentElement, null),
      { preloadedState: { language } },
    );
    const re = new RegExp(expected, 'i');
    expect(await findByText(re, { collapseWhitespace: false })).toBeInTheDocument();
  });
});

describe('Changing language & theme', () => {
  test('ru → en', async () => {
    const response = await fetch('/api/en/Intro');
    const content = await response.json();
    const expected = Object.values(content)[0] as string;
    const { getByRole, findByText } = renderWithProviders(
      createElement(App, null),
      { preloadedState: { language: ru } },
    );
    const languageButton = getByRole('button', { name: 'Сменить язык' });
    fireEvent.click(languageButton);
    const re = new RegExp(expected, 'i');
    expect(await findByText(re, { collapseWhitespace: false })).toBeInTheDocument();
  });

  test('dark → light', () => {
    const { getByRole } = renderWithProviders(
      createElement(App, null),
      { preloadedState: { language: ru, theme: lightTheme } },
    );
    const themeButton = getByRole('button', { name: 'Сменить тему' });
    const baseContainer = getByRole('article');
    fireEvent.click(themeButton);
    expect(baseContainer).toHaveStyle({
      color: darkTheme.color,
      backgroundColor: darkTheme.backgroundColor,
    });
  });
});

const statuses = [
  { status: 'success', alt_description: unsplashResult.alt_description },
  { status: 'fail', alt_description: 'many fresh limes' },
] as const;

describe.each(statuses)('Picture resolving', (situation) => {
  test(`Try to fetch: ${situation.status}`, async () => {
    if (situation.status === 'fail') {
      server.use(
        http.get('https://api.unsplash.com/photos/random', () => HttpResponse.error()),
      );
    }

    const { getByAltText } = renderWithProviders(
      createElement(App, null),
      {
        preloadedState: { language: ru, theme: lightTheme },
        router: MemoryRouter,
        props: { initialEntries: ['/404'] },
      },
    );

    await waitFor(() => {
      const image = getByAltText(situation.alt_description);
      expect(image).toBeInTheDocument();
    }, { timeout: 1500 });
  });
});
