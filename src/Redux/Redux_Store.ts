// import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
// import thunkMiddleware from 'redux-thunk'
import SidebarReduser from './SidebarReduser'

const rootReducers = {
    Sidebar: SidebarReduser
}

// export type AppStateType = ReturnType<RootRedusersType>


// @ts-ignore

const compoceEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = rootReducers
// @ts-ignore

window.__store__ = store

export default store