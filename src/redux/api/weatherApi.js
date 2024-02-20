// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const defaultParams = {
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
          params: defaultParams,
        };
      },
    }),
    weatherForecast: build.query({
      query: ({ destination }) => {
        return {
          url: `weatherdata/forecast`,
          params: {
            key: defaultParams.key,
            iconSet: "icons1",
            aggregateHours: 24,
            contentType: "json",
            locations: destination,
          },
        };
      },
    }),
  }),
});

export const { useWeatherListQuery, useWeatherForecastQuery } = weatherAPI;
