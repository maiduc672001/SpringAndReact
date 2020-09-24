import * as types from "../constant/ProductsConst";

var initialState = {};
const productReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.FETCH_DETAILS_PRODUCTS:
      return { ...state };
    case types.FETCH_DETAILS_PRODUCTS_SUCCESS:
      return actions.payload.product;
    case types.FETCH_DETAILS_PRODUCTS_FAILED:
      return actions.payload.error;
    default:
      return { ...state };
  }
};
export default productReducer;
