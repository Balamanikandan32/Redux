import {applyMiddleware, combineReducers, createStore} from "redux"
import CakeReducer from "./Cakes/CakeReducer"
import logger from "redux-logger"
import icecreamReducer from "./IceCream/IcecreamReducer";

const rootReducer = combineReducers({
    cake:CakeReducer,
    icecream:icecreamReducer,
})

const store = createStore(rootReducer,applyMiddleware(logger))

export default store;