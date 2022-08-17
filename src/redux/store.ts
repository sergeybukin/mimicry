import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import weatherReducer from "./slices/weatherSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    weather: weatherReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
