import { createSlice } from "@reduxjs/toolkit";
import { IClosetDataItem, ILookData, ILookDataSection } from "types/closet";
import { AppDispatch } from "../store";
import { api } from "../api/api";
import { ILooksPost } from "types/requests";
import { mapClosetResponse } from "../mappers/mapClosetResponse";
import { IClosetResponse, ILooksResponse } from "types/closetResponse";
import { mapLooksResponse } from "../mappers/mapLooksResponse";
import { removeLookItem } from "../utils/removeLookItem";
import { updateLookItem } from "redux/utils/updateLookItem";

interface ILookEditing {
  status: boolean;
  lookName: string;
  lookId: string;
}

interface IInitialState {
  closetData: Array<IClosetDataItem>;
  currLookData: ILookData;
  userLooks: Array<ILookData>;
  closetLoading: boolean;
  userLooksLoading: boolean;
  lookEditing: ILookEditing;
}

const initialState: IInitialState = {
  closetData: [],
  currLookData: {
    id: "",
    name: "",
    data: {
      top: [],
      bottom: [],
      accs: [],
      head: [],
      shoes: [],
      under: [],
    },
  },
  userLooks: [],
  closetLoading: true,
  userLooksLoading: true,
  lookEditing: {} as ILookEditing,
};

export const userSlice = createSlice({
  name: "closet",
  initialState,
  reducers: {
    setCurrLookData: (state, action) => {
      state.currLookData = action.payload;
    },
    resetCurrLookData: (state) => {
      state.currLookData = initialState.currLookData;
    },
    updateCurrLookItem: (state, action) => {
      state.currLookData = updateLookItem(action.payload, state.currLookData);
    },
    removeCurrLookItem: (state, action) => {
      state.currLookData = removeLookItem(action.payload, state.currLookData);
    },
    setUserLooks: (state, action) => {
      state.userLooks = action.payload;
    },
    setUserLooksLoading: (state, action) => {
      state.userLooksLoading = action.payload;
    },
    setClosetData: (state, action) => {
      state.closetData = action.payload;
    },
    setClosetLoading: (state, actions) => {
      state.closetLoading = actions.payload;
    },
  },
});

export const {
  setCurrLookData,
  removeCurrLookItem,
  setUserLooks,
  setClosetLoading,
  setClosetData,
  updateCurrLookItem,
  resetCurrLookData,
  setUserLooksLoading,
} = userSlice.actions;

export const selectCloset = (state: any) => state.closet;

export const getClosetData =
  () =>
  async (dispatch: AppDispatch): Promise<void> => {
    dispatch(setClosetLoading(true));
    const closet = await api.get<Array<IClosetResponse>>("/closet/");
    dispatch(setClosetData(closet.map(mapClosetResponse)));
    dispatch(setClosetLoading(false));
  };

export const getUserLooksData =
  (userId: string) =>
  async (dispatch: AppDispatch): Promise<void> => {
    dispatch(setUserLooksLoading(true));
    const looks = await api.get<Array<ILooksResponse>>(`/looks/?id=${userId}`);
    dispatch(setUserLooks(mapLooksResponse(looks)));
    dispatch(setUserLooksLoading(false));
  };

export const postUserLook =
  (look: ILooksPost) =>
  async (dispatch: AppDispatch): Promise<void> => {
    dispatch(setUserLooksLoading(true));

    const body: string = JSON.stringify({
      ...look,
    });

    await api.post<string, any>("/looks/", body).catch(console.log);
    dispatch(setUserLooksLoading(false));
  };

export const updateUserLook =
  (look: ILooksPost, lookId: string) =>
  async (dispatch: AppDispatch): Promise<void> => {
    dispatch(setUserLooksLoading(true));

    const body: string = JSON.stringify({
      ...look,
    });

    await api
      .put<string, any>(`/looks/?lookId=${lookId}`, body)
      .catch(console.log);

    dispatch(setUserLooksLoading(false));
  };

export default userSlice.reducer;
