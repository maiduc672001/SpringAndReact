import { API_URL } from "../constant/index";
import AxiosService from "../common/axiosService/AxiosService";
export const requestHeaders = () => {
  return { AUTHORIZATION: `Bearer ${sessionStorage.jwt}` };
};
export const fetchSalesApi = () => {
  const headers = requestHeaders();
  const apiUrl = `${API_URL}/sales`;
  return AxiosService.get(apiUrl, { headers: headers });
};
export const addToCart = (commodityid) => {
  const headers = requestHeaders();
  const apiUrl = `${API_URL}/cart`;
  const commodity = { commodityid };
  return AxiosService.post(apiUrl, commodity, { headers: headers });
};
export const fetchCategory = () => {
  const headers = requestHeaders();
  const apiUrl = `${API_URL}/category`;
  return AxiosService.get(apiUrl, { headers: headers });
};
export const fetchProduct = (categoryid) => {
  const headers = requestHeaders();
  var apiUrl = `${API_URL}/products`;
  if (categoryid) {
    apiUrl += `/${categoryid}`;
  } else {
    apiUrl += "/0";
  }
  return AxiosService.get(apiUrl, { headers: headers });
};
export const fetchDetailProduct = (commodityid) => {
  const headers = requestHeaders();
  var apiUrl = `${API_URL}/details/${commodityid}`;
  return AxiosService.get(apiUrl, { headers: headers });
};
export const addNewProduct = (product) => {
  console.log("CCC");
  let formData = new FormData();
  formData.append("file", product.imageToUpload.file);
  for (var i in product) {
    formData.append([i], product[i]);
  }

  console.log("f", formData);
  var apiUrl = `${API_URL}/product`;
  console.log(product);
  return AxiosService.post(apiUrl, formData, {
    headers: {
      AUTHORIZATION: `Bearer ${sessionStorage.jwt}`,
    },
  });
};
export const updateProduct = (product) => {
  console.log(product);
  let formData = new FormData();
  formData.append("file", product.imageToUpload.file);
  for (var i in product) {
    if (i !== "categoryDTO" && i !== "file") {
      console.log(typeof i);
      formData.append([i], product[i]);
    }
  }
  console.log("e", formData);
  var apiUrl = `${API_URL}/product`;
  console.log(product);
  return AxiosService.put(apiUrl, formData, {
    headers: {
      AUTHORIZATION: `Bearer ${sessionStorage.jwt}`,
    },
  });
};
