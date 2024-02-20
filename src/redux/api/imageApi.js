import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const defaultParams = {
  page: 1,
  client_id: import.meta.env.VITE_API_KEY_IMAGE,
};

export const imageAPI = createApi({
  reducerPath: "imageAPI",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL_IMAGE }),
  endpoints: (build) => ({
    cityImages: build.query({
      query: ({ destination }) => {
        return {
          url: "/photos",
          params: { ...defaultParams, query: destination },
        };
      },
    }),
  }),
});

export const { useLazyCityImagesQuery } = imageAPI;
