import * as types from "../constant/ProductsConst";
import { toastError } from "../common/toast/Toast";
var initialState = [];
const salesReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.FETCH_SALES:
      return [...state];
    case types.FETCH_SALES_SUCCESS:
      var { products } = actions.payload;
      return products;
    case types.FETCH_SALES_FAILED:
      const { error } = actions.payload;
      toastError(error);
      return [...state];
    default:
      return [...state];
  }
};
export default salesReducer;
