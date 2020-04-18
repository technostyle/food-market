import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { CART_NAMESPACE, cartReducer, CartState } from 'modules/cart'

export interface GlobalState {
    [CART_NAMESPACE]: CartState
}

const reducer = combineReducers({
    [CART_NAMESPACE]: cartReducer,
})

export const store = createStore(reducer, {}, applyMiddleware(thunk, logger))
