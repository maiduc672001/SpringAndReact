import * as types from "../constant/ProductsConst";
import { toastError, toastSuccess } from "../common/toast/Toast";

var initialState = "";
const messageReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.ADD_TO_CART:
      return state;
    case types.ADD_TO_CART_SUCCESS:
      toastSuccess(actions.payload.message);
      return actions.payload.message;
    case types.ADD_TO_CART_FAILED:
      toastError(actions.payload.error);
      return actions.payload.error;
    default:
      return state;
  }
};
export default messageReducer;
