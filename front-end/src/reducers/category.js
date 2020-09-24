import * as types from "../constant/ProductsConst";
var initialState = [];
const categoryReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case types.FETCH_CATEGORY:
      return [...state];
    case types.FETCH_CATEGORY_SUCCESS:
      return actions.payload.data;
    case types.FETCH_CATEGORY_FAILED:
      return actions.payload.error;
    default:
      return [...state];
  }
};
export default categoryReducers;
