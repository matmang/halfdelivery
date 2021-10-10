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
    // ? menus 에 메뉴 추가하기. "객체" 형식으로 menus 배열에 추가된다.
    addMenu: (state, action) => {
      state.menus.push(action.payload);
      //TODO: 메뉴 추가 이후, "수량"도 추가하기.
      //TODO: 1. 해당메뉴가 없으면 수량=1,
      //TODO: 2. 있으면, 메뉴중복추가X, 수량만 +1
    },
    // ? menus 비우기.
    cleanMenus: (state, action) => {
      state.menus = [];
    },
    // ? 매장이름 비우기.
    cleanStoreName: (state, action) => {
      state.storeName = "-";
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
export const { setStore, addMenu, cleanMenus, cleanStoreName } = orderSlice.actions;
const orderReducer = orderSlice.reducer;
export default orderReducer;
