import {combineReducers} from 'redux';
import usersReducer from './usersSlice';
import storesReducer from './storesSlice';

export default combineReducers({
  usersReducer,
  storesReducer,
});
