import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tripReducer from "./redusers/tripReducer";
import { weatherAPI } from "./api/weatherApi";
import { cityAPI } from "./api/cityApi";
import { imageAPI } from "./api/imageApi";

const APIS = [weatherAPI, cityAPI, imageAPI];

const apiReducers = APIS.reduce((acc, { reducerPath, reducer }) => {
  return {
    ...acc,
    [reducerPath]: reducer,
  };
}, {});

const middlewares = APIS.map(({ middleware }) => middleware);

const reducers = combineReducers({
  ...apiReducers,
  tripReducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

export default store;
