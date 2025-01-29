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
    let timeout: any = null;
    Promise.race([
      fetch(`${import.meta.env.VITE_APP_SERVER_PUBLIC}/isServerDown`),
      new Promise((_resolve, reject) => {
        timeout = setTimeout(() => {
          clearTimeout(timeout);
          console.info('Fallback source is chosen');
          reject(new Error('Server did not respond in estimated time'));
        }, 2000);
      }),
    ])
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
