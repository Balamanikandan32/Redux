import {applyMiddleware, createStore} from "redux"
import CakeReducer from "./CakeReducer";
import logger from "redux-logger"

const store = createStore(CakeReducer,applyMiddleware(logger))

export default store;