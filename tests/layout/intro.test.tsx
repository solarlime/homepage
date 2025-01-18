import { describe, expect, test } from 'vitest';
import { createElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, findByRole, waitFor } from '@testing-library/react';

import renderWithProviders from '../prepareForTests';
import { en } from '../../src/redux/language/languageSlice';
import App from '../../src/App';

describe('Intro', () => {
  test('Name', async () => {
    const { findByText } = renderWithProviders(
      createElement(App, null),
      {
        preloadedState: { language: en },
        router: MemoryRouter,
        props: { initialEntries: ['/'] },
      },
    );

    const initialName = await findByText('solarlime');
    expect(initialName).toBeInTheDocument();

    const response = await fetch(`${import.meta.env.VITE_APP_STORAGE}/content/en/intro`);
    const content = await response.json();
    await waitFor(() => {
      expect(initialName).toHaveTextContent(content?.title_name);
    }, { timeout: 7000 });
  }, { timeout: 10000 });

  test('Projects', async () => {
    const { findAllByTestId } = renderWithProviders(
      createElement(App, null),
      {
        preloadedState: { language: en },
        router: MemoryRouter,
        props: { initialEntries: ['/'] },
      },
    );

    const projects = await findAllByTestId('project');
    const imageOne = await findByRole(projects[0], 'img');
    const anchorOne = await findByRole(projects[0], 'link');
    expect(anchorOne).not.toHaveFocus();

    fireEvent.click(imageOne);
    expect(anchorOne).toHaveFocus();

    const imageTwo = await findByRole(projects[1], 'img');
    const anchorTwo = await findByRole(projects[1], 'link');
    expect(anchorTwo).not.toHaveFocus();

    fireEvent.click(imageTwo);
    expect(anchorTwo).toHaveFocus();
    expect(anchorOne).not.toHaveFocus();
  });
});
