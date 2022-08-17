import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { mapWeatherResponse } from "../mappers/mapWeatherResponse";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weatherDataLoading: true,
    currentWeatherData: {},
    forecastWeatherData: [],
  },
  reducers: {
    setCurrentWeatherData: (state, action) => {
      state.currentWeatherData = action.payload;
    },
    setForecastWeatherData: (state, action) => {
      state.forecastWeatherData = action.payload;
    },
    setWeatherDataLoading: (state, action) => {
      state.weatherDataLoading = action.payload;
    },
  },
});

export const {
  setCurrentWeatherData,
  setWeatherDataLoading,
  setForecastWeatherData,
} = weatherSlice.actions;

export const selectWeather = (state: any) => state.weather;

export const getCurrentWeatherData =
  (latitude: number | undefined, longitude: number | undefined) =>
  async (dispatch: AppDispatch): Promise<void> => {
    dispatch(setWeatherDataLoading(true));
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/current/?latitude=${latitude}5&longitude=${longitude}`
    );
    const resWeatherData = await response.json();

    dispatch(
      setCurrentWeatherData(mapWeatherResponse(resWeatherData.response))
    );

    await dispatch(getForecastWeatherData(latitude, longitude));
    dispatch(setWeatherDataLoading(false));
  };

export const getForecastWeatherData =
  (latitude: number | undefined, longitude: number | undefined) =>
  async (dispatch: AppDispatch): Promise<void> => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/forecast/?latitude=${latitude}5&longitude=${longitude}&days=1`
    );
    const resWeatherData = await response.json();
    dispatch(
      setForecastWeatherData(resWeatherData?.response.map(mapWeatherResponse))
    );
  };

export default weatherSlice.reducer;
