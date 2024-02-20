import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const defaultParams = {
  key: import.meta.env.VITE_API_KEY_CITY,
};

export const cityAPI = createApi({
  reducerPath: "cityAPI",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL_CITY }),
  endpoints: (build) => ({
    cityList: build.query({
      query: (params) => {
        return {
          url: "/",
          params: { ...params, ...defaultParams },
        };
      },
    }),
  }),
});

export const { useLazyCityListQuery } = cityAPI;
