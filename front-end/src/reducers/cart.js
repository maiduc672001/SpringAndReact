import { toastError, toastSuccess } from "../common/toast/Toast";
import * as types from "../constant/cart";
var initialState = [];
const cartReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.FETCH_PRODUCT_CART:
      return [...state];
    case types.FETCH_PRODUCT_CART_SUCCESS:
      return actions.payload.carts;
    case types.FETCH_PRODUCT_CART_FAILED:
      return actions.payload.error;
    case types.CHANGE_AMOUNT:
      var { id, val } = actions.payload;
      var index = state.findIndex((item) => {
        return item.cartcommodityid === id;
      });
      var amount = state[index].amount + val;
      state[index] = {
        ...state[index],
        amount,
      };
      return [...state];
    case types.UPDATE_CART:
      return [...state];
    case types.UPDATE_CART_SUCCESS:
      toastSuccess("Cập nhật thành công");
      return [...state];
    case types.UPDATE_CART_FAILED:
      toastError("Cập nhật thất bại");
      return [...state];
    case types.ORDER:
      return [...state];
    case types.ORDER_SUCCESS:
      return [
        {
          success: true,
        },
      ];
    case types.DELETE_PRODUCT_CART:
      return [...state];
    case types.DELETE_PRODUCT_CART_SUCCESS:
      toastSuccess("Xóa thành công");
      return actions.payload.carts;
    case types.DELETE_PRODUCT_CART_FAILED:
      toastError("Có lỗi xảy ra");
      return [...state];
    case types.ORDER_FAILED:
      toastError("Có lỗi xảy ra");
      return [...state];
    default:
      return [...state];
  }
};
export default cartReducer;
