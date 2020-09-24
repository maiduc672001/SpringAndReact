import * as types from "../constant/loginTypes";
import { toastError, toastSuccess } from "../common/toast/Toast";
var data = JSON.parse(localStorage.getItem("user"));
var initialState = data ? data : {};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USER_DETAILS:
      return {
        ...state,
      };
    case types.FETCH_USER_DETAILS_SUCCESS:
      var { user } = action.payload;
      localStorage.setItem("user", JSON.stringify(user));
      return { ...user };
    case types.MOVE_USER:
      localStorage.removeItem("user");
      return {
        username: "",
        role: "",
      };
    case types.UPDATE_USER:
      return { ...state };
    case types.UPDATE_USER_SUCCESS:
      var { user } = action.payload;
      localStorage.setItem("user", JSON.stringify(user));
      toastSuccess("Cập nhật thành công");
      return { ...user };
    case types.UPDATE_USER_FAILED:
      toastError("Tên đăng nhập hoặc email đã tồn tại");
      return { ...state };
    default:
      return state;
  }
};
export default userReducer;
