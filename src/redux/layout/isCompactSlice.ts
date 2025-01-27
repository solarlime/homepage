import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store.ts';

const initialState = document.documentElement.clientWidth < 700;

const isCompactSlice = createSlice({
  name: 'isCompact',
  initialState,
  reducers: {
    setIsCompact: (_state, action) => action.payload,
  },
});

const selectIsCompact = (state: RootState) => state.isCompact;

export const { setIsCompact } = isCompactSlice.actions;
export { isCompactSlice, selectIsCompact };
