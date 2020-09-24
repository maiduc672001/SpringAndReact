import * as types from "../constant/modal";
var initialState = {
  showModal: false,
  component: null,
  title: "",
};
const modalReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.SHOW_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case types.HIDE_MODAL:
      return {
        ...state,
        showModal: false,
        component: null,
        title: "",
      };
    case types.CHANGE_MODAL_TITLE:
      return {
        ...state,
        title: actions.payload.title,
      };
    case types.CHANGE_MODAL_CONTENT:
      return {
        ...state,
        component: actions.payload.component,
      };
    default:
      return {
        ...state,
      };
  }
};
export default modalReducer;
