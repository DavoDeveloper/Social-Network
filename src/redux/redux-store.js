import { combineReducers, legacy_createStore as createStore } from "redux";
import messageReducer from "./message-reducer";
import postReducer from "./post-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({ profile: postReducer, dialogsPage: messageReducer, sidebar: sidebarReducer });
let store = createStore(reducers);

export default store;
