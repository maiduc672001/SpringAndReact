import { combineReducers } from "redux";
import products from "./products";
import sessionReducer from "./session";
import userReducer from "./user";
import sales from "./sales";
import message from "./message";
import category from "./category";
import { IntlReducer as Intl } from "react-redux-multilingual";
import filter from "./filter";
import product from "./product";
import { reducer as formReducer } from "redux-form";
import carts from "./cart";
import modal from "./modal";
const rootReducers = combineReducers({
  products,
  session: sessionReducer,
  userDetails: userReducer,
  sales,
  message,
  category,
  Intl,
  filter,
  product,
  form: formReducer,
  carts,
  modal,
});
export default rootReducers;
