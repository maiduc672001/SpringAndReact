import { takeLatest, call, put, delay } from "redux-saga/effects";
import * as loginTypes from "./../constant/loginTypes";
import * as loginActions from "../actions/sessionActions";
import * as apiAction from "../api/SessionApi";
import { STATUS_CODE } from "../constant/index";
import * as productActions from "../actions/Products";
import * as productApi from "../api/ProductApi";
import * as productTypes from "../constant/ProductsConst";
import * as cartTypes from "../constant/cart";
import * as cartApi from "../api/cartApi";
import { hideModal } from "../actions/modalActions";
import * as cartActions from "../actions/cartActions";
function* login({ payload }) {
  const { credentials } = payload;
  const res = yield call(apiAction.login, credentials);
  const { status, data } = res;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(loginActions.loginSuccess(data.accessToken));
    const response = yield call(apiAction.fetchUserDetails);
    const { status: status1, data: data1 } = response;
    if (status1 === STATUS_CODE.SUCCESS) {
      yield put(loginActions.fetchUserDetailsSuccess(data1));
    }
  }
}
function* fetchUserDetails() {
  const response = yield call(apiAction.fetchUserDetails);
  const { status: status1, data: data1 } = response;
  if (status1 === STATUS_CODE.SUCCESS) {
    yield put(loginActions.fetchUserDetailsSuccess(data1));
  }
}
function* fetchSales() {
  const response = yield call(productApi.fetchSalesApi);
  const { status, data } = response;
  if (status === STATUS_CODE.SUCCESS) {
    yield delay(1000);
    yield put(productActions.fetchSalesSuccess(data));
  } else {
    yield put(productActions.fetchSalesFailed(data));
  }
}
function* addToCart({ payload }) {
  const { commodityid } = payload;
  const response = yield call(productApi.addToCart, commodityid);
  const { status, data } = response;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(productActions.onAddtoCartSuccess(data));
  } else {
    yield put(productActions.onAddtoCartFailed(data));
  }
}
function* fetchCategory() {
  const response = yield call(productApi.fetchCategory);
  const { status, data } = response;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(productActions.fetchCategorySuccess(data));
  } else {
    yield put(productActions.fetchProductsFailed(data));
  }
}
function* fetchProducts({ payload }) {
  const { categoryid } = payload;
  const response = yield call(productApi.fetchProduct, categoryid);
  const { status, data } = response;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(productActions.fetchProductsSuccess(data));
  } else {
    yield put(productActions.fetchProductsFailed(data));
  }
}
function* fetchDetailProduct({ payload }) {
  const { commodityid } = payload;
  const response = yield call(productApi.fetchDetailProduct, commodityid);
  const { status, data } = response;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(productActions.fetchDetailProductSuccess(data));
  } else {
    yield put(productActions.fetchDetailProductFailed(data));
  }
}
function* addNewUser({ payload }) {
  try {
    const { user } = payload;
    const response = yield call(apiAction.addNewUser, user);
    const { status, data } = response;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(loginActions.addNewUserSuccess(data.accessToken));
      const response1 = yield call(apiAction.fetchUserDetails);
      const { status: status1, data: data1 } = response1;
      if (status1 === STATUS_CODE.SUCCESS) {
        yield put(loginActions.fetchUserDetailsSuccess(data1));
      }
    }
  } catch (e) {
    yield put(loginActions.addNewUserFailed(e));
  }
}
function* updateUser({ payload }) {
  try {
    const { user } = payload;
    const response = yield call(apiAction.updateUser, user);
    const { status, data } = response;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(loginActions.updateUserSuccess(data));
    }
  } catch (e) {
    yield put(loginActions.updateUserFailed(e));
  }
}
function* fetchCart() {
  try {
    const response = yield call(cartApi.fetchCart);
    const { status, data } = response;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(cartActions.fetchProductCartSuccess(data));
    }
  } catch (e) {
    yield put(cartActions.fetchProductCartFailed(e));
  }
}
function* updateCart({ payload }) {
  const { carts } = payload;
  try {
    const response = yield call(cartApi.updateCart, carts);
    const { status, data } = response;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(cartActions.updateCartSuccess(data));
    }
  } catch (e) {
    yield put(cartActions.updateCartFailed(e));
  }
}
function* order({ payload }) {
  const { carts } = payload;
  try {
    const response = yield call(cartApi.order, carts);
    const { status, data } = response;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(cartActions.orderSuccess(data));
    }
  } catch (e) {
    yield put(cartActions.orderFailed(e));
  }
}
function* deleteCart({ payload }) {
  const { id } = payload;
  try {
    const response = yield call(cartApi.deleteProductCart, id);
    const { status, data } = response;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(cartActions.deleteProductCartSuccess(data));
    }
  } catch (e) {
    yield put(cartActions.deleteProductCartFailed(e));
  }
  yield put(hideModal());
}
function* addNewProduct({ payload }) {
  const { product } = payload;
  try {
    const response = yield call(productApi.addNewProduct, product);
    const { status, data } = response;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(productActions.addNewProductSuccess(data));
    }
  } catch (e) {
    yield put(productActions.addNewProductFailed(e));
  }
}
function* updateProduct({ payload }) {
  const { product } = payload;
  try {
    console.log("ACCA");
    const response = yield call(productApi.updateProduct, product);
    const { status, data } = response;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(productActions.updateProductSuccess(data));
    }
  } catch (e) {
    yield put(productActions.updateProductFailed(e));
  }
}
function* rootSaga() {
  yield takeLatest(productTypes.FETCH_SALES, fetchSales);
  yield takeLatest(loginTypes.LOG_IN, login);
  yield takeLatest(loginTypes.FETCH_USER_DETAILS, fetchUserDetails);
  yield takeLatest(productTypes.ADD_TO_CART, addToCart);
  yield takeLatest(productTypes.FETCH_CATEGORY, fetchCategory);
  yield takeLatest(productTypes.FETCH_PRODUCTS, fetchProducts);
  yield takeLatest(productTypes.FETCH_DETAILS_PRODUCTS, fetchDetailProduct);
  yield takeLatest(loginTypes.ADD_NEW_USER, addNewUser);
  yield takeLatest(loginTypes.UPDATE_USER, updateUser);
  yield takeLatest(cartTypes.FETCH_PRODUCT_CART, fetchCart);
  yield takeLatest(cartTypes.UPDATE_CART, updateCart);
  yield takeLatest(cartTypes.ORDER, order);
  yield takeLatest(cartTypes.DELETE_PRODUCT_CART, deleteCart);
  yield takeLatest(productTypes.ADD_NEW_PRODUCT, addNewProduct);
  yield takeLatest(productTypes.UPDATE_PRODUCT, updateProduct);
}
export default rootSaga;
