import { createSlice } from "@reduxjs/toolkit";
import { Auth } from "aws-amplify";

const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoggedIn: false,
    token: null,
  },
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    logOut(state, action) {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export const userLogin = (username, password) => async (dispatch) => {
  try {
    const data = await Auth.signIn(username, password);
    console.log(data);
    dispatch(logIn(data));
  } catch (e) {
    console.log(e);
    alert("Wrong user/password");
  }
};
export default userSlice.reducer;
