/* eslint-disable no-param-reassign */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createApi } from 'unsplash-js';

import type { ApiResponse } from 'unsplash-js/dist/helpers/response';
import type { Random } from 'unsplash-js/dist/methods/photos/types';
import type { RootState } from '../app/store';

import lime from '../../img/lime.jpg';
import limeThumb from '../../img/lime-thumb.jpg';

interface Photo {
  raw: string | undefined,
  thumb: string,
  alt_description: string | null,
  author: string,
  userLink: string,
  photoLink: string,
}

export interface ImageState {
  photo: Photo | null
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
}

// @ts-ignore
const unsplash = createApi({
  accessKey: import.meta.env.VITE_APP_UNSPLASH,
});

const utmString = '?utm_source=Homepage&utm_medium=referral';

const getImage = async (utm: string): Promise<Photo> => {
  const result = await Promise.any([
    unsplash.photos.getRandom({ collectionIds: ['228275'], orientation: 'landscape' }),
    new Promise((resolve) => { setTimeout(() => resolve({}), 1000); }),
  ]) as ApiResponse<Random>;
  if (result.response) {
    return {
      raw: result.response.urls.raw,
      thumb: result.response.urls.thumb,
      alt_description: result.response.alt_description,
      author: `${result.response.user.first_name} ${result.response.user.last_name}`,
      userLink: `${result.response.user.links.html}${utm}`,
      photoLink: `${result.response.links.html}${utm}`,
    };
  }
  throw Error('Fallback image is used');
};

export const tryToGetImage = createAsyncThunk('image/getImage', async () => getImage(utmString));

const initialState: ImageState = {
  photo: null,
  status: 'idle',
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(tryToGetImage.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(tryToGetImage.fulfilled, (state, action) => {
        state.photo = action.payload;
        state.status = 'succeeded';
      })
      .addCase(tryToGetImage.rejected, (state) => {
        state.photo = {
          raw: lime,
          thumb: limeThumb,
          alt_description: 'many fresh limes',
          author: 'Victor Figueroa',
          userLink: `https://unsplash.com/@vfigueroa${utmString}`,
          photoLink: `https://unsplash.com/photos/huUI0y0ERMM${utmString}`,
        };
        state.status = 'failed';
      });
  },
});

export const selectImage = (state: RootState) => state.image as ImageState;

export default imageSlice;
