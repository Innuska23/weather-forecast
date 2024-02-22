import { createSlice } from "@reduxjs/toolkit";
import { formatDate, getDateWithOffsetDay } from "../../utils/date";

const initialState = {
  trips: [
    {
      id: "id-1",
      destination: "London",
      startDate: formatDate(getDateWithOffsetDay(1)),
      endDate: formatDate(getDateWithOffsetDay(5)),
      imageSrc:
        "https://unsplash.com/photos/Oja2ty_9ZLM/download?ixid=M3w1NjkxNTh8MHwxfHNlYXJjaHwxfHxMb25kb258ZW58MHx8fHwxNzA4MzY2Njk2fDA",
    },
    {
      id: "id-2",
      destination: "Berlin",
      startDate: formatDate(getDateWithOffsetDay(3)),
      endDate: formatDate(getDateWithOffsetDay(6)),
      imageSrc:
        "https://unsplash.com/photos/1uWanmgkd5g/download?ixid=M3w1NjkxNTh8MHwxfHNlYXJjaHwxfHxCZXJsaW58ZW58MHx8fHwxNzA4MzY3ODU5fDA",
    },
  ],
  selectedTrip: null,
};

const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    addTrip: (state, action) => {
      state.trips.push(action.payload);
    },
    selectTrip: (state, action) => {
      state.selectedTrip = action.payload;
    },
  },
});

export const { addTrip, selectTrip } = tripSlice.actions;

export default tripSlice.reducer;
