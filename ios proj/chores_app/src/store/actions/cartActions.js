import { ACTION_TYPES } from './actionTypes';

export const addToCart = (payload) => ({
  type: ACTION_TYPES.ADD_TO_CART,
  payload,
});

const addQuantity = (payload) => ({
  type: ACTION_TYPES.ADD_QUANTITY_TO_CART,
  payload,
});

const removeItemCart = (payload) => ({
  type: ACTION_TYPES.REMOVE_ITEM_CART,
  payload,
});

const removeCart = (payload) => ({
  type: ACTION_TYPES.REMOVE_TO_CART,
  payload,
});

