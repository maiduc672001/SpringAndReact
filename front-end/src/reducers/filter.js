import * as types from "../constant/ProductsConst";
var initialState = "";
const filterReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.FILTER_PRODUCT:
      return actions.payload.name;
    default:
      return state;
  }
};
export default filterReducer;
