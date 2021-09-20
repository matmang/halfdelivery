import { createSlice } from "@reduxjs/toolkit";

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
      state.explore.push(action.payload.stores);
      state.explore.page = action.payload.page;
    },
  },
});

const {setExploreStores} = storesSlice.actions;

export default storesSlice.reducer;
