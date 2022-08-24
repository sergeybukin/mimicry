import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { mapWeatherResponse } from "../mappers/mapWeatherResponse";
import { api } from "../api/api";
import {
  ICurrWeatherResponse,
  IForecastWeatherResponse,
} from "../../types/weatherResponse";

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

    const weatherData = await api.get<ICurrWeatherResponse>(
      `/current/?latitude=${latitude}5&longitude=${longitude}`
    );
    dispatch(setCurrentWeatherData(mapWeatherResponse(weatherData.response)));

    await dispatch(getForecastWeatherData(latitude, longitude));
    dispatch(setWeatherDataLoading(false));
  };

export const getForecastWeatherData =
  (latitude: number | undefined, longitude: number | undefined) =>
  async (dispatch: AppDispatch): Promise<void> => {
    const weatherData = await api.get<IForecastWeatherResponse>(
      `/forecast/?latitude=${latitude}&longitude=${longitude}&days=3`
    );
    dispatch(
      setForecastWeatherData(weatherData?.response.map(mapWeatherResponse))
    );
  };

export default weatherSlice.reducer;
