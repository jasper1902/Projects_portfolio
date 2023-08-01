import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface SearchType {
  menu: boolean;
}

const initialState: SearchType = {
  menu: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState: initialState,
  reducers: {
    updateMenu: (_state, action: PayloadAction<SearchType>) => {
      action.payload;
      return action.payload;
    },
  },
});

export const { updateMenu } = menuSlice.actions;
export const menuSelector = (store: RootState) => store.menuReducer;
export default menuSlice.reducer;
