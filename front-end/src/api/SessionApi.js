import { API_URL } from "../constant/index";
import AxiosService from "../common/axiosService/AxiosService";
export const requestHeaders = () => {
  return { AUTHORIZATION: `Bearer ${sessionStorage.jwt}` };
};
export const login = (credentials) => {
  var apiUrl = `${API_URL}/api/auth/signin`;
  if (credentials.profileObj) {
    apiUrl += "/google";
    return AxiosService.post(apiUrl, credentials.profileObj);
  }
  console.log(credentials);
  if (credentials.name) {
    apiUrl += "/facebook";
    return AxiosService.post(apiUrl, credentials);
  }
  return AxiosService.post(apiUrl, credentials);
};
export const fetchUserDetails = () => {
  const headers = requestHeaders();
  const apiUrl = `${API_URL}/api/user`;
  return AxiosService.get(apiUrl, { headers: headers });
};
export const addNewUser = (user) => {
  const apiUrl = `${API_URL}/api/auth/signup`;
  return AxiosService.post(apiUrl, user);
};
export const updateUser = (user) => {
  const headers = requestHeaders();
  const apiUrl = `${API_URL}/update/user`;
  return AxiosService.put(apiUrl, user, { headers: headers });
};
