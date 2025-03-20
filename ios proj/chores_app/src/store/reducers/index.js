import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { storeReducer } from './storeReducer';
import { userReducer } from './userReducer';
import { favReducer } from './favReducer';
import globalReducers from './globalReducers'
import authReducers from './authReducers'




export const rootReducer = combineReducers({
  cart: cartReducer,
  stores: storeReducer,
  createUser: userReducer,
  favItems: favReducer,
  globalReducers: globalReducers,
  authReducers: authReducers,
});
