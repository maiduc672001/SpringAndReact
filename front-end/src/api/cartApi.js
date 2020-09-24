import { API_URL } from "../constant/index";
import AxiosService from "../common/axiosService/AxiosService";
export const requestHeaders = () => {
  return { AUTHORIZATION: `Bearer ${sessionStorage.jwt}` };
};
export const fetchCart = () => {
  const apiUrl = `${API_URL}/cart`;
  const headers = requestHeaders();
  return AxiosService.get(apiUrl, { headers });
};
export const updateCart = (data) => {
  const apiUrl = `${API_URL}/cart`;
  const headers = requestHeaders();
  return AxiosService.put(apiUrl, data, { headers });
};
export const order = (carts) => {
  const apiUrl = `${API_URL}/cart/delete`;
  const headers = requestHeaders();
  return AxiosService.put(apiUrl, carts, { headers });
};
export const deleteProductCart = (id) => {
  const apiUrl = `${API_URL}/cart/${id}`;
  const headers = requestHeaders();
  return AxiosService.delete(apiUrl, { headers });
};
