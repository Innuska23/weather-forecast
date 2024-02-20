import { createSelector } from "@reduxjs/toolkit";

export const selectWeatherState = (state) => state.tripReducer;

export const selectedTrip = createSelector(
  selectWeatherState,
  (state) => state.selectedTrip
);

export const selectTrips = createSelector(
  selectWeatherState,
  (state) => state.trips
);
