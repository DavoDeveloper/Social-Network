import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import authReducer from "./auth-reducer";
import messageReducer from "./message-reducer";
import postReducer from "./post-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import ThunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  profilePage: postReducer,
  dialogsPage: messageReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
  auth: authReducer,
  form: formReducer,
});
let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;
