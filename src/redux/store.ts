import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import weatherReducer from "./slices/weatherSlice";
import closetReducer from "./slices/closetSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    weather: weatherReducer,
    closet: closetReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
