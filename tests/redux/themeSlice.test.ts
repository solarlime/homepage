import { describe, test, expect } from 'vitest';

import {
  themeReducer,
  toggleTheme,
  lightTheme,
  darkTheme,
} from '../../src/redux/theme/themeSlice';

describe('Theme reducer', () => {
  const initialState = lightTheme;

  test('Change theme', () => {
    const newState = themeReducer(initialState, toggleTheme());
    expect(newState).toEqual(darkTheme);
  });
});
