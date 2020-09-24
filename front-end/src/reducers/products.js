import * as types from "../constant/ProductsConst";
import { toastError, toastSuccess } from "../common/toast/Toast";
var initialState = [];
const productsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.FETCH_PRODUCTS:
      return [...state];
    case types.FETCH_PRODUCTS_SUCCESS:
      return actions.payload.products;
    case types.ADD_NEW_PRODUCT:
      return [...state];
    case types.ADD_NEW_PRODUCT_SUCCESS:
      toastSuccess("Thêm thành công");
      return actions.payload.products;
    case types.ADD_NEW_PRODUCT_FAILED:
      toastError("Thêm thất bại");
      return;
    case types.UPDATE_PRODUCT:
      return [...state];
    case types.UPDATE_PRODUCT_SUCCESS:
      toastSuccess("Cập nhật thành công");
      return [...state];
    case types.UPDATE_PRODUCT_FAILED:
      toastError("Cập nhật thất bại");
      return [...state];
    case types.FETCH_PRODUCTS_FAILED:
      return actions.payload.error;
    default:
      return [...state];
  }
};
export default productsReducer;
