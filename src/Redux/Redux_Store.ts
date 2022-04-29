import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import { reducer as formReduser } from "redux-form";

import SidebarReduser from "./SidebarReduser";
import thunkMiddleware from "redux-thunk";
import LoginReducer from "./LoginReducer";
import BlogReducer from "./BlogReducer";

const rootReducers = combineReducers({
  Sidebar: SidebarReduser,
  LoginPage: LoginReducer,
  BlogPage: BlogReducer,
  form: formReduser,
});

type RootRedusersType = typeof rootReducers;
export type AppStateType = ReturnType<RootRedusersType>;

// @ts-ignore

const compoceEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  compoceEnhancers(applyMiddleware(thunkMiddleware))
);
// @ts-ignore

window.__store__ = store;

export default store;
