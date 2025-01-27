import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';

type SourceState = {
  source: string;
  isServerDown: boolean;
};

const sourceState: SourceState = {
  source: '',
  isServerDown: true,
};

const defineSource = () =>
  new Promise<void>((resolve, reject) => {
    fetch(`${import.meta.env.VITE_APP_SERVER_PUBLIC}/isServerDown`)
      .then(() => resolve())
      .catch(() => reject());
  });

export const getSource = createAsyncThunk(
  'sourceState/getSource',
  defineSource,
);

export const sourceSlice = createSlice({
  name: 'sourceState',
  initialState: sourceState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // @ts-ignore
      .addCase(getSource.fulfilled, () => ({
        isServerDown: false,
        source: `${import.meta.env.VITE_APP_SERVER_PUBLIC}/homepage`,
      }))
      // @ts-ignore
      .addCase(getSource.rejected, () => ({
        isServerDown: true,
        source: `${import.meta.env.VITE_APP_STORAGE}`,
      }));
  },
});

export const selectSource = (state: RootState) => state.sourceState.source;
export const selectIsServerDown = (state: RootState) =>
  state.sourceState.isServerDown;
