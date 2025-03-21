import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';

const makeReturnQueryObject = async () => {
  let serverIsDown = false;
  let timeout: any = null;
  try {
    await Promise.race([
      fetch(`${import.meta.env.VITE_APP_SERVER_PUBLIC}/isServerDown`),
      new Promise((_resolve, reject) => {
        timeout = setTimeout(() => {
          clearTimeout(timeout);
          console.info('Content will be fetched from the fallback source');
          reject(new Error('Server did not respond in estimated time'));
        }, 2000);
      }),
    ]);
  } catch (e) {
    serverIsDown = true;
  }

  return function returnQueryObject() {
    if (serverIsDown) {
      return { baseUrl: `${import.meta.env.VITE_APP_STORAGE}` };
    }
    return {
      baseUrl: `${import.meta.env.VITE_APP_SERVER_PUBLIC}/homepage`,
    };
  };
};

const returnQueryObject = await makeReturnQueryObject();

const optionedBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  object,
  FetchBaseQueryMeta
> = async (args, api, extraOptions) => {
  const query = fetchBaseQuery(returnQueryObject());
  return query(args, api, extraOptions);
};

export const contentApi = createApi({
  reducerPath: 'contentApi',
  baseQuery: optionedBaseQuery,
  endpoints: (builder) => ({
    getContentByComponent: builder.query({
      query: ({ languageName, component, file }) => {
        if (file) {
          return file;
        }
        return `/content/${languageName}/${component}.json`;
      },
    }),
  }),
});

export const { useGetContentByComponentQuery } = contentApi;
