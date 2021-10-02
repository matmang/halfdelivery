import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: 0,
// };

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    storeName: "",
    menus: [],
  },
  reducers: {
    // ? 매장이름 할당하기.
    setStore: (state, action) => {
      state.storeName = action.payload;
    },
    // ? menus 에 메뉴 추가하기.
    addMenu: (state, action) => {
      state.menus.push({ menuInfo: action.payload });
    },
    // ? menus 비우기.
    cleanMenus: (state, action) => {
      state.menus = [];
    },
  },
});

// ? Exporting.
export const { setStore, addMenu, cleanMenus } = orderSlice.actions;
const orderReducer = orderSlice.reducer;
export default orderReducer;
