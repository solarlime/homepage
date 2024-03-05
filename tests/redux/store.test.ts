import { http, HttpResponse, delay } from 'msw';
import { setupServer } from 'msw/node';
import {
  beforeAll, afterEach, afterAll, describe, test, expect,
} from 'vitest';
import { createElement } from 'react';

import renderWithProviders from '../prepareForTests';
import { en, ru } from '../../src/redux/language/languageSlice';

const handlers = [
  http.get('/api/:language/:component', async ({ params }) => {
    const { language, component } = params;
    await delay(200);
    // @ts-ignore
    const answer = await import(`../../api/${language}/${component}`).then((res) => { const { response } = res; return response; });
    return HttpResponse.json(answer);
  }),
];

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterEach(() => server.resetHandlers());

afterAll(async () => {
  server.close();
});

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
