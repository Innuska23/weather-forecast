import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trips: [
    {
      id: "id-1",
      destination: "London",
      startDate: "2024-02-21",
      endDate: "2024-02-29",
      imageSrc:
        "https://unsplash.com/photos/Oja2ty_9ZLM/download?ixid=M3w1NjkxNTh8MHwxfHNlYXJjaHwxfHxMb25kb258ZW58MHx8fHwxNzA4MzY2Njk2fDA",
    },
    {
      id: "id-2",
      destination: "Berlin",
      startDate: "2024-02-21",
      endDate: "2024-02-22",
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
