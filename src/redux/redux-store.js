import { combineReducers, legacy_createStore as createStore } from "redux";
import messageReducer from "./message-reducer";
import postReducer from "./post-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({ profilePage: postReducer, dialogsPage: messageReducer, usersPage: usersReducer, sidebar: sidebarReducer });
let store = createStore(reducers);

export default store;
