import { createSelector } from "@reduxjs/toolkit";

export const selectWeatherState = (state) => state.tripReducer;

export const selectedTrip = createSelector(
  selectWeatherState,
  (state) => state.selectedTrip
);

export const selectTrips = createSelector(
  [selectWeatherState, (state, param) => param],
  (state, param) => {
    if (param) {
      return state.trips.filter((item) =>
        item.destination.toLowerCase().match(param.toLowerCase())
      );
    }
    return state.trips;
  }
);
