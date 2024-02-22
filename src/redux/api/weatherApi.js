import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const defaultWeatherParams = {
  unitGroup: "metric",
  include: "days",
  contentType: "json",
  key: import.meta.env.VITE_API_KEY_WEATHER,
};

export const weatherAPI = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL_WEATHER }),
  endpoints: (build) => ({
    weatherList: build.query({
      query: ({ destination, startDate, endDate }) => {
        return {
          url: `timeline/${destination}/${startDate}/${endDate}`,
          params: defaultWeatherParams,
        };
      },
    }),
    weatherForecastTodayByCity: build.query({
      query: ({ destination }) => {
        return {
          url: `timeline/${destination}/today`,
          params: defaultWeatherParams,
        };
      },
    }),
  }),
});

export const { useWeatherListQuery, useWeatherForecastTodayByCityQuery } =
  weatherAPI;
