import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";

const defaultPlace = {text: 'Moscow', geometry: { type: 'point', coordinates: [55.7522, 37.6156] }}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userDataLoading: false,
    isUserSigned: false,
    userData: {},
    placesData: [],
    userPlace: defaultPlace,
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setIsUserSigned: (state, action) => {
      state.isUserSigned = action.payload;
    },
    setUserDataLoading: (state, action) => {
      state.userDataLoading = action.payload;
    },
    setPlacesData: (state, action) => {
      state.placesData = action.payload;
    },
    setUserPlace: (state, action) => {
      state.userPlace = action.payload;
    },
  },
});

export const {
  setUserData,
  setIsUserSigned,
  setUserDataLoading,
  setPlacesData,
  setUserPlace,
} = userSlice.actions;

export const selectUser = (state: any) => state.user;

export const resetUserData = (dispatch: any) => {};

export const getPlacesData =
  (text: string) =>
  async (dispatch: AppDispatch): Promise<void> => {
    const response = await fetch(
      `${process.env.REACT_APP_MAP_BASE_URL}/mapbox.places/${text}.json?access_token=${process.env.REACT_APP_MAP_API_KEY}&cachebuster=1625641871908&autocomplete=true&types=place`
    );
    const resPlacesData = await response.json();

    dispatch(setPlacesData(resPlacesData.features));
  };

export const getPlaceByCoordinates =
  (coordinates: Array<number>) =>
    async (dispatch: AppDispatch): Promise<void> => {
      const response = await fetch(
        `${process.env.REACT_APP_MAP_BASE_URL}/mapbox.places/${coordinates[1]},${coordinates[0]}.json?access_token=${process.env.REACT_APP_MAP_API_KEY}&types=place`
      );
      const resPlacesData = await response.json();
      dispatch(setUserPlace(resPlacesData.features[0]));
    };

export default userSlice.reducer;
