import * as types from "../constant/cart";
export const fetchProductCart = () => ({
  type: types.FETCH_PRODUCT_CART,
});
export const fetchProductCartSuccess = (carts) => ({
  type: types.FETCH_PRODUCT_CART_SUCCESS,
  payload: {
    carts,
  },
});
export const fetchProductCartFailed = (error) => ({
  type: types.FETCH_PRODUCT_CART_FAILED,
  payload: {
    error,
  },
});
export const changeAmount = (val, id) => ({
  type: types.CHANGE_AMOUNT,
  payload: {
    val,
    id,
  },
});
export const updateCart = (carts) => ({
  type: types.UPDATE_CART,
  payload: {
    carts,
  },
});
export const updateCartSuccess = (message) => ({
  type: types.UPDATE_CART_SUCCESS,
  payload: {
    message,
  },
});
export const updateCartFailed = (error) => ({
  type: types.UPDATE_CART_FAILED,
  payload: {
    error,
  },
});
export const order = (carts) => ({
  type: types.ORDER,
  payload: {
    carts,
  },
});
export const orderSuccess = (message) => ({
  type: types.ORDER_SUCCESS,
  payload: {
    message,
  },
});
export const orderFailed = (error) => ({
  type: types.ORDER_FAILED,
  payload: {
    error,
  },
});
export const deleteProductCart = (id) => ({
  type: types.DELETE_PRODUCT_CART,
  payload: {
    id,
  },
});
export const deleteProductCartSuccess = (carts) => ({
  type: types.DELETE_PRODUCT_CART_SUCCESS,
  payload: {
    carts,
  },
});
export const deleteProductCartFailed = (error) => ({
  type: types.DELETE_PRODUCT_CART_FAILED,
  payload: {
    error,
  },
});
