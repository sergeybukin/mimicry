import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { mapWeatherResponse } from "../mappers/mapWeatherResponse";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weatherDataLoading: false,
    weatherData: {},
  },
  reducers: {
    setWeatherData: (state, action) => {
      state.weatherData = action.payload;
    },
    setWeatherDataLoading: (state, action) => {
      state.weatherDataLoading = action.payload;
    },
  },
});

export const { setWeatherData, setWeatherDataLoading } = weatherSlice.actions;

export const selectWeather = (state: any) => state.weather;

export const getWeatherData =
  (latitude: number | undefined, longitude: number | undefined) =>
  async (dispatch: AppDispatch): Promise<void> => {
    dispatch(setWeatherDataLoading(true));
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/current/?latitude=${latitude}5&longitude=${longitude}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const resWeatherData = await response.json();
    dispatch(setWeatherData(mapWeatherResponse(resWeatherData)));
    dispatch(setWeatherDataLoading(false));
  };

export default weatherSlice.reducer;
