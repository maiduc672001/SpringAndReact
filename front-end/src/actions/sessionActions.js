import * as types from "../constant/loginTypes";

export function loginSuccess(jwt) {
  return {
    type: types.LOG_IN_SUCCESS,
    payload: {
      jwt,
    },
  };
}
export const loginUser = (credentials) => {
  return {
    type: types.LOG_IN,
    payload: {
      credentials,
    },
  };
};
export function logOutUser() {
  sessionStorage.removeItem("jwt");
  return { type: types.LOG_OUT };
}
export const fetchUserDetails = () => {
  return {
    type: types.FETCH_USER_DETAILS,
  };
};
export const fetchUserDetailsSuccess = (user) => {
  return {
    type: types.FETCH_USER_DETAILS_SUCCESS,
    payload: {
      user,
    },
  };
};
export const moveUser = () => {
  return {
    type: types.MOVE_USER,
  };
};
export const addNewUser = (user) => ({
  type: types.ADD_NEW_USER,
  payload: {
    user,
  },
});
export const addNewUserSuccess = (jwt) => ({
  type: types.ADD_NEW_USER_SUCCESS,
  payload: {
    jwt,
  },
});
export const addNewUserFailed = (error) => ({
  type: types.ADD_NEW_USER_FAILED,
  payload: {
    error,
  },
});
export const updateUser = (user) => ({
  type: types.UPDATE_USER,
  payload: {
    user,
  },
});
export const updateUserSuccess = (user) => ({
  type: types.UPDATE_USER_SUCCESS,
  payload: {
    user,
  },
});
export const updateUserFailed = (error) => ({
  type: types.UPDATE_USER_FAILED,
  payload: {
    error,
  },
});
export const loginGoogle = (user) => ({
  type: types.LOGIN_GOOGLE,
  payload: {
    user,
  },
});
export const loginGoogleSuccess = (jwt) => ({
  type: types.LOGIN_GOOGLE,
  payload: {
    jwt,
  },
});
export const loginGoogleFailed = (eror) => ({
  type: types.LOGIN_GOOGLE,
  payload: {
    eror,
  },
});
