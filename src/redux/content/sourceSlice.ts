 

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';

const sourceState: string = `${import.meta.env.VITE_APP_SERVER_PUBLIC}/homepage/projects`;

const defineSource = () =>
  new Promise<void>((resolve, reject) => {
    fetch(`${import.meta.env.VITE_APP_SERVER_PUBLIC}/isServerDown`)
      .then(() => resolve())
      .catch(() => reject());
  });

export const getSource = createAsyncThunk('source/getSource', defineSource);

export const sourceSlice = createSlice({
  name: 'source',
  initialState: sourceState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // @ts-ignore
      .addCase(
        getSource.fulfilled,
        () => `${import.meta.env.VITE_APP_SERVER_PUBLIC}/homepage/projects`,
      )
      // @ts-ignore
      .addCase(
        getSource.rejected,
        () => `${import.meta.env.VITE_APP_STORAGE}/projects`,
      );
  },
});

export const selectSource = (state: RootState) => state.source;
