import { combineReducers } from "redux";
import orderReducer from "./orderSlice";
import usersReducer from "./usersSlice";

export default combineReducers({
  usersReducer,
  orderReducer,
});
