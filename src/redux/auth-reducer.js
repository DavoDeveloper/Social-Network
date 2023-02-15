import { AuthAPIController } from "../api/api";
import { stopSubmit } from "redux-form";

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
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setUsersData = (id, email, login, isAuth) => ({
  type: SET_USERS_DATA,
  payload: { id, email, login, isAuth },
});

export const checkisAuth = () => (dispatch) => {
  AuthAPIController.AuthUsers().then((data) => {
    if (data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispatch(setUsersData(id, email, login, true));
    }
  });
};

export const login = (id, email, login) => (dispatch) => {
  AuthAPIController.Login(id, email, login).then((data) => {
    if (data.resultCode === 0) {
      dispatch(checkisAuth());
    } else {
      let message = data.messages.length > 0 ? data.messages[0] : "Some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  });
};

export const logout = () => (dispatch) => {
  AuthAPIController.Logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setUsersData(null, null, null, false));
    }
  });
};

export default authReducer;
