import { APIController } from "../api/api";

const SET_USERS_DATA = "SET_USERS_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setUsersData = (data) => ({ type: SET_USERS_DATA, data });

export const checkisAuth = (isAuth) => {
  return (dispatch) => {
    APIController.AuthUsers().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUsersData(data.data));
        dispatch((isAuth = true));
      }
    });
  };
};

export default authReducer;
