import { describe, expect, test } from 'vitest';
import { createElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, findByRole, findByTestId } from '@testing-library/react';

import renderWithProviders from '../prepareForTests';
import FactsList from '../../src/components/About/FactsList';
import { en } from '../../src/redux/language/languageSlice';

describe('About', () => {
  test('Masonry', async () => {
    const { findAllByRole } = renderWithProviders(
      createElement(FactsList, null),
      {
        preloadedState: { language: en },
        router: MemoryRouter,
        props: { initialEntries: [`/${import.meta.env.VITE_APP_PLEASE}`] },
      },
    );

    const facts = await findAllByRole('listitem');
    const descriptionOne = await findByTestId(facts[0], 'description');
    const buttonOne = await findByRole(facts[0], 'button');
    expect(descriptionOne).not.toHaveClass(/opened/);

    const descriptionTwo = await findByTestId(facts[1], 'description');
    const buttonTwo = await findByRole(facts[1], 'button');
    expect(descriptionTwo).not.toHaveClass(/opened/);

    fireEvent.click(buttonOne);
    expect(descriptionOne).toHaveClass(/opened/);
    expect(descriptionTwo).not.toHaveClass(/opened/);

    fireEvent.click(buttonTwo);
    expect(descriptionTwo).toHaveClass(/opened/);
    expect(descriptionOne).not.toHaveClass(/opened/);

    fireEvent.click(buttonTwo);
    expect(descriptionTwo).not.toHaveClass(/opened/);
    expect(descriptionOne).not.toHaveClass(/opened/);
  });
});
