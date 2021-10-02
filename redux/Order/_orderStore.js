import { createSlice, configureStore } from "@reduxjs/toolkit";

const storeInfoSlice = createSlice({
  name: "storeInfo",
  initialState: [],
  reducers: {
    addStore: (state, action) => {
      state.push({ store: action.payload, category: action.payload });
    },
  },
});

const menusSlice = createSlice({
  name: "menus",
  initialState: [],
  reducers: {
    addMenu: (state, action) => {
      state.push({ menu: action.payload });
    },
    // ! deleteMenu 도 작성해야 함.
  },
});

export const storeInfoStore = configureStore({
  reducer: storeInfoSlice.reducer,
});
export const menusStore = configureStore({ reducer: menusSlice.reducer });
export const { addStore } = storeInfoSlice.actions;
export const { addMenu } = menusSlice.actions;
