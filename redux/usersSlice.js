import { createSlice } from "@reduxjs/toolkit";
import { Auth } from "aws-amplify";

const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoggedIn: false,
    token: null,
    termService: false,
    termPersonal: false,
    termAd: false,
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
    setTermService(state, action) {
      state.termService = action.payload;
    },
    setTermPersonal(state, action) {
      state.termPersonal = action.payload;
    },
    setTermAd(state, action) {
      state.termAd = action.payload;
    },
  },
});

export const { logIn, logOut, setTermService, setTermPersonal, setTermAd } =
  userSlice.actions;
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
export const toggleTermService = (agree) => async (dispatch) => {
  try {
    dispatch(setTermService(agree));
  } catch (e) {
    console.warn(e);
  }
};
export const toggleTermPersonal = (agree) => async (dispatch) => {
  try {
    dispatch(setTermPersonal(agree));
  } catch (e) {
    console.warn(e);
  }
};
export const toggleTermAd = (agree) => async (dispatch) => {
  try {
    dispatch(setTermAd(agree));
  } catch (e) {
    console.warn(e);
  }
};

export default userSlice.reducer;
