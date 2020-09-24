import axios from "axios";
class TestApi {
  static requestHeaders() {
    return { AUTHORIZATION: `Bearer ${sessionStorage.jwt}` };
  }

  static getAllCats() {
    const headers = this.requestHeaders();

    const api = "http://localhost:8080/abc";
    return axios
      .get(api, { headers: headers })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        return error;
      });
  }
}
export default TestApi;
