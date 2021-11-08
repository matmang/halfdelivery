import { createSlice } from "@reduxjs/toolkit";
import { store } from "../api";

const storesSlice = createSlice({
  name: "stores",
  initialState: {
    explore: {
      page: 1,
      stores: [],
    },
  },
  reducers: {
    setExploreStores(state, action) {
      const { payload } = action;
      if (payload.page === 1) {
        state.explore.stores = payload.stores;
        state.explore.page = 1;
      } else {
        state.explore.stores = [...state.explore.stores, ...payload.stores];
      }
    },
    increasePage(state, action) {
      state.explore.page += 1;
    },
  },
});

export const { setExploreRooms, increasePage } = storesSlice.actions;

export const getStores = (page) => async (dispatch, getstate) => {
  const {
    usersReducer: { token },
  } = getState();
  try {
    const {
      data: { results },
    } = await store(page, token);
    dispatch(
      setExploreStores({
        stores: results,
        page,
      })
    );
  } catch (e) {
    console.warn(e);
  }
};

export default storesSlice.reducer;
