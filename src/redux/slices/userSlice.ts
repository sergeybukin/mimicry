import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { api } from "../api/api";
import { IPostUser, IUser } from "../../types/user";

const lang = "en";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    userDataLoading: false,
    email: null,
    token: null,
    id: null,
    name: "",
    age: null,
    gender: "",
    weight: null,
    height: null,
    location: {},
    placesHistory: [],
    placesData: [],
    currPosition: {},
    looksList: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.gender = action.payload.gender;
      state.weight = action.payload.weight;
      state.height = action.payload.height;
      state.location = action.payload.location;
      state.placesHistory = action.payload.places_history || [];
      state.looksList = action.payload.looks_list || [];
    },
    removeUser: (state) => {
      state.email = null;
      state.token = null;
      state.id = null;
    },
    setUserDataLoading: (state, action) => {
      state.userDataLoading = action.payload;
    },
    setPlacesData: (state, action) => {
      state.placesData = action.payload;
    },
    setUserLocation: (state, action) => {
      state.location = action.payload;
    },
    setCurrPosition: (state, action) => {
      state.currPosition = action.payload;
    },
    setPlacesHistory: (state, action) => {
      state.placesHistory = action.payload;
    },
  },
});

export const {
  setUser,
  setUserDataLoading,
  setPlacesData,
  setUserLocation,
  removeUser,
  setCurrPosition,
  setPlacesHistory,
} = userSlice.actions;

export const selectUser = (state: any) => state.user;

export const getPlacesData =
  (text: string) =>
  async (dispatch: AppDispatch): Promise<void> => {
    const response = await fetch(
      `${process.env.REACT_APP_MAP_BASE_URL}/mapbox.places/${text}.json?access_token=${process.env.REACT_APP_MAP_API_KEY}&cachebuster=1625641871908&autocomplete=true&types=place&language=${lang}`
    );
    const resPlacesData = await response.json();

    dispatch(setPlacesData(resPlacesData.features));
  };

export const getPlaceByCoordinates =
  (coordinates: Array<number>) =>
  async (dispatch: AppDispatch): Promise<void> => {
    const response = await fetch(
      `${process.env.REACT_APP_MAP_BASE_URL}/mapbox.places/${coordinates[1]},${coordinates[0]}.json?access_token=${process.env.REACT_APP_MAP_API_KEY}&types=place&language=${lang}`
    );
    const resPlacesData = await response.json();
    dispatch(setCurrPosition(resPlacesData.features[0]));
  };

export const getUserData =
  (id: string) =>
  async (dispatch: AppDispatch): Promise<void> => {
    dispatch(setUserDataLoading(true));
    const user = await api.get<IUser>(`/users/?id=${id}`);
    dispatch(setUser(user));
    dispatch(setUserDataLoading(false));
  };

export const postUserData =
  (user: IPostUser) =>
  async (dispatch: AppDispatch): Promise<void> => {
    dispatch(setUserDataLoading(true));

    const body: string = JSON.stringify({
      user,
    });

    await api.post<string, any>("/users/", body);

    dispatch(setUserDataLoading(false));
  };

export const updateUserData =
  (id: string, data: any) =>
  async (dispatch: AppDispatch): Promise<void> => {
    dispatch(setUserDataLoading(true));

    const body: string = JSON.stringify({
      user: { ...data },
    });

    await api.put<string, any>(`/users/?id=${id}`, body);

    dispatch(setUserDataLoading(false));
  };

export default userSlice.reducer;
