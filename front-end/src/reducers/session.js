import * as types from "../constant/loginTypes";
import { toastError, toastSuccess } from "../common/toast/Toast";
var initialState = !!sessionStorage.jwt;
const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_IN_SUCCESS:
      //   history.push("/");
      var { jwt } = action.payload;
      sessionStorage.setItem("jwt", jwt);
      return !!sessionStorage.jwt;
    case types.LOG_IN:
      return !!sessionStorage.jwt;
    case types.LOG_OUT:
      // browserHistory.push('/')
      return !!sessionStorage.jwt;
    case types.ADD_NEW_USER:
      return !!sessionStorage.jwt;
    case types.ADD_NEW_USER_SUCCESS:
      var { jwt } = action.payload;
      sessionStorage.setItem("jwt", jwt);
      toastSuccess("Tạo tài khoản thành công");
      return !!sessionStorage.jwt;
    case types.ADD_NEW_USER_FAILED:
      toastError("Tên đăng nhập hoặc email bị trùng");
      return state;
    default:
      return state;
  }
};
export default sessionReducer;
