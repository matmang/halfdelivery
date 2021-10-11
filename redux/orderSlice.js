import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: 0,
// };

export const orderSlice = createSlice({
  name: "order",
  initialState: [],
  // ! state 수정시 참고. 참조: https://redux-toolkit.js.org/usage/immer-reducers
  reducers: {
    // ? menus 에 메뉴 추가하기. "객체 안에 객체" 형식으로 추가 된다. (객체 안에 menuInfo 속성의 값으로 action.payload 가 객체로 추가됨.)
    addMenu: (state, action) => {
      state.push({ menuInfo: action.payload });
      // state.menus.push(action.payload);
    },
    // ? menus 에서 선택한 메뉴만 삭제하기. DelID 를 활용한다.
    deleteMenu: (state, action) => {
      return state.filter((element) => element.menuInfo.DelID !== action.payload);
    },
    // ? menus 비우기.
    cleanMenus: (state, action) => {
      return state.filter((element) => element.menuInfo.DelID === 0);
    },
  },
});

// ? Exporting.
export const { addMenu, deleteMenu, cleanMenus } = orderSlice.actions;
const orderReducer = orderSlice.reducer;
export default orderReducer;
