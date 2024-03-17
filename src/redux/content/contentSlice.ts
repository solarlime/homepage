import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contentApi = createApi({
  reducerPath: 'contentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_API,
  }),
  endpoints: (builder) => ({
    getContentByComponent: builder.query({
      query: ({ languageName, component }) => `/${languageName}/${component}`,
    }),
  }),
});

export const { useGetContentByComponentQuery } = contentApi;
