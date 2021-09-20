import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    isLoggedIn: false,
    token: null,
    id: null,
  },
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    logOut(state, action) {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export const {logIn, logOut} = userSlice.actions;
export const userLogin = form => async dispatch => {
  try {
<<<<<<< Updated upstream
    if (data.uid) {
      dispatch(logIn(data.uid));
=======
    const {
      data: {id, token}
    } = await login(form);
    if (id && token) {
      dispatch(logIn({token, id}));
>>>>>>> Stashed changes
    }
  } catch (e) {
    alert('Wrong user/password');
  }
};
export const socialLogin = form => async dispatch => {
  try {
    if (data.user.uid) {
      dispatch(logIn(data.user.uid));
    }
  } catch (e) {
    alert(e);
  }
};
export default userSlice.reducer;
