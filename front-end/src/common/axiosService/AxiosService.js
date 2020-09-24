import axios from "axios";
class AxiosService {
  constructor() {
    const instance = axios.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }
  handleSuccess(response) {
    return response;
  }
  handleError(error) {
    return Promise.reject(error);
  }
  get(url, header) {
    return this.instance.get(url, header);
  }
  post(url, body, header) {
    return this.instance.post(url, body, header);
  }
  put(url, data, header) {
    return this.instance.put(url, data, header);
  }
  delete(url, header) {
    return this.instance.delete(url, header);
  }
}
export default new AxiosService();
