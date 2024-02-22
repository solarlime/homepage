import { describe, test, expect } from 'vitest';

import {
  languageReducer, toggleLanguage, ru, en,
} from './languageSlice';

describe('Theme reducer', () => {
  const initialState = ru;

  test('Change theme', () => {
    const newState = languageReducer(initialState, toggleLanguage());
    expect(newState).toEqual(en);
  });
});
