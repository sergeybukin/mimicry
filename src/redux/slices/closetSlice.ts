import { createSlice } from "@reduxjs/toolkit";
import { initialClosetData } from "../mock";
import { ILookData } from "types/closet";

interface IInitialState {
  currLookData: ILookData;
}

const initialState: IInitialState = {
  currLookData: initialClosetData,
};

export const userSlice = createSlice({
  name: "closet",
  initialState,
  reducers: {
    setCurrLookData: (state, action) => {
      state.currLookData = action.payload;
    },
  },
});

export const { setCurrLookData } = userSlice.actions;

export const selectCloset = (state: any) => state.closet;

export default userSlice.reducer;
