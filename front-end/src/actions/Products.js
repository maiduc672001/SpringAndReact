import * as types from "../constant/ProductsConst";
export const fetchProductsSuccess = (products) => ({
  type: types.FETCH_PRODUCTS_SUCCESS,
  payload: {
    products,
  },
});
export const fetchProducts = (categoryid) => ({
  type: types.FETCH_PRODUCTS,
  payload: {
    categoryid,
  },
});
export const fetchProductsFailed = (error) => ({
  type: types.FETCH_PRODUCTS_FAILED,
  payload: {
    error,
  },
});
export const fetchSales = () => ({
  type: types.FETCH_SALES,
});
export const fetchSalesSuccess = (products) => ({
  type: types.FETCH_SALES_SUCCESS,
  payload: {
    products,
  },
});
export const fetchSalesFailed = (error) => ({
  type: types.FETCH_SALES_FAILED,
  payload: {
    error,
  },
});
export const onAddtoCart = (commodityid) => ({
  type: types.ADD_TO_CART,
  payload: {
    commodityid,
  },
});
export const onAddtoCartSuccess = (message) => ({
  type: types.ADD_TO_CART_SUCCESS,
  payload: {
    message,
  },
});
export const onAddtoCartFailed = (error) => ({
  type: types.ADD_TO_CART_FAILED,
  payload: {
    error,
  },
});
export const fetchCategory = () => ({
  type: types.FETCH_CATEGORY,
});
export const fetchCategorySuccess = (data) => ({
  type: types.FETCH_CATEGORY_SUCCESS,
  payload: {
    data,
  },
});
export const fetchCategoryFailed = (error) => ({
  type: types.FETCH_CATEGORY_FAILED,
  payload: {
    error,
  },
});
export const filterProduct = (name) => ({
  type: types.FILTER_PRODUCT,
  payload: {
    name,
  },
});
export const fetchDetailProduct = (commodityid) => ({
  type: types.FETCH_DETAILS_PRODUCTS,
  payload: {
    commodityid,
  },
});
export const fetchDetailProductSuccess = (product) => ({
  type: types.FETCH_DETAILS_PRODUCTS_SUCCESS,
  payload: {
    product,
  },
});
export const fetchDetailProductFailed = (error) => ({
  type: types.FETCH_DETAILS_PRODUCTS_FAILED,
  payload: {
    error,
  },
});
export const addNewProduct = (product) => ({
  type: types.ADD_NEW_PRODUCT,
  payload: {
    product,
  },
});
export const addNewProductSuccess = (products) => ({
  type: types.ADD_NEW_PRODUCT_SUCCESS,
  payload: {
    products,
  },
});
export const addNewProductFailed = (error) => ({
  type: types.ADD_NEW_PRODUCT_FAILED,
  payload: {
    error,
  },
});
export const updateProduct = (product) => ({
  type: types.UPDATE_PRODUCT,
  payload: {
    product,
  },
});
export const updateProductSuccess = (message) => ({
  type: types.UPDATE_PRODUCT_SUCCESS,
  payload: {
    message,
  },
});
export const updateProductFailed = (error) => ({
  type: types.UPDATE_PRODUCT_FAILED,
  payload: {
    error,
  },
});
