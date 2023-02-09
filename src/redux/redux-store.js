import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import authReducer from "./auth-reducer";
import messageReducer from "./message-reducer";
import postReducer from "./post-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import ThunkMiddleware from "redux-thunk";

let reducers = combineReducers({ profilePage: postReducer, dialogsPage: messageReducer, usersPage: usersReducer, sidebar: sidebarReducer, auth: authReducer });
let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;
