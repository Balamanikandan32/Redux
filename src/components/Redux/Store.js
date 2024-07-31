import {applyMiddleware, combineReducers, createStore} from "redux"
import CakeReducer from "./Cakes/CakeReducer"
import logger from "redux-logger"
import  { thunk }  from "redux-thunk";
import icecreamReducer from "./IceCream/IcecreamReducer";
import UserReducer from "./Users/UserReducer";

const rootReducer = combineReducers({
    cake:CakeReducer,
    icecream:icecreamReducer,
    users : UserReducer,
})

const store = createStore(rootReducer,applyMiddleware(thunk ,logger))

export default store;