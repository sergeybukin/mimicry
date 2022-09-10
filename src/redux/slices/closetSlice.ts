import { createSlice } from "@reduxjs/toolkit";
import { IClosetDataItem, ILookDataItem, TypesOfClothing } from "types/closet";
import { AppDispatch } from "../store";
import { api } from "../api/api";
import { ILooksPost } from "types/requests";
import { mapClosetResponse } from "../mappers/mapClosetResponse";
import { IClosetResponse, ILooksResponse } from "types/closetResponse";
import { mapLooksResponse } from "../mappers/mapLooksResponse";

interface IInitialState {
  closetData: Array<IClosetDataItem>;
  currLookData: ILookDataItem;
  userLooks: Array<ILookDataItem>;
  closetLoading: boolean;
}

const initialState: IInitialState = {
  closetData: [],
  currLookData: {
    top: [],
    bottom: [],
    accs: [],
    head: [],
    shoes: [],
    under: [],
  },
  userLooks: [],
  closetLoading: false,
};

export const userSlice = createSlice({
  name: "closet",
  initialState,
  reducers: {
    setCurrLookData: (state, action) => {
      state.currLookData = action.payload;
    },
    setClosetLoading: (state, actions) => {
      state.closetLoading = actions.payload;
    },
    removeCurrLookItem: (state, action) => {
      const newData: ILookDataItem = {
        head: [],
        top: [],
        bottom: [],
        shoes: [],
        under: [],
        accs: [],
      };
      Object.assign(newData, state.currLookData);
      newData[action.payload.clothingType as TypesOfClothing] = newData[
        action.payload.clothingType as TypesOfClothing
      ].filter((e) => e.article !== action.payload.article);
      state.currLookData = newData;
    },
    setUserLooks: (state, action) => {
      state.userLooks = action.payload;
    },
    setClosetData: (state, action) => {
      state.closetData = action.payload;
    },
  },
});

export const {
  setCurrLookData,
  removeCurrLookItem,
  setUserLooks,
  setClosetLoading,
  setClosetData,
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
    dispatch(setClosetLoading(true));
    const looks = await api.get<Array<ILooksResponse>>(`/looks/?id=${userId}`);
    dispatch(setUserLooks(mapLooksResponse(looks)));
    dispatch(setClosetLoading(false));
  };

export const postUserLook =
  (look: ILooksPost) =>
  async (dispatch: AppDispatch): Promise<void> => {
    dispatch(setClosetLoading(true));

    const body: string = JSON.stringify({
      ...look,
    });

    await api.post<string, any>("/looks/", body).catch(console.log);
    dispatch(setClosetLoading(false));
  };

export default userSlice.reducer;
