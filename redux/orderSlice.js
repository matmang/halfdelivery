import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: 0,
// };

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    storeName: "",
    menus: [],
    time: 0,
    persons: 0,
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
    // ! 일단은, 매칭 시간이랑 인원은 리덕스가 불필요하지 않을까...
    // // ? 매칭 시간 설정.
    // setTime: (state, action) => {
    //   state.time = action.payload;
    // },
    // // ? 매칭 인원 설정.
    // setPersons: (state, action) => {
    //   state.persons = action.payload;
    // },
  },
});

// ? Exporting.
export const { setStore, addMenu, cleanMenus } = orderSlice.actions;
const orderReducer = orderSlice.reducer;
export default orderReducer;
