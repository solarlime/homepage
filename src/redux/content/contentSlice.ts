import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';

const optionedBaseQuery: BaseQueryFn<
string | FetchArgs,
unknown, FetchBaseQueryError,
{},
FetchBaseQueryMeta
> = async (args, api, extraOptions) => {
  const mainQuery = fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_APP_SERVER_PUBLIC}/homepage/content`,
  });

  const fallbackQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_API,
  });

  try {
    await fetch(`${import.meta.env.VITE_APP_SERVER_PUBLIC}/isServerDown`);
    return await mainQuery(args, api, extraOptions);
  } catch (e) {
    return fallbackQuery(args, api, extraOptions);
  }
};

export const contentApi = createApi({
  reducerPath: 'contentApi',
  baseQuery: optionedBaseQuery,
  endpoints: (builder) => ({
    getContentByComponent: builder.query({
      query: ({ languageName, component }) => `/${languageName}/${component}`,
    }),
  }),
});

export const { useGetContentByComponentQuery } = contentApi;
