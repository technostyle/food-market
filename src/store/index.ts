import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { CART_NAMESPACE, cartReducer, CartState } from 'modules/cart'
import {
    SCROLLER_NAMESPACE,
    scrollerReducer,
    ScrollerState,
} from 'modules/scroller'
import {
    PAGINATION_NAMESPACE,
    paginationReducer,
    PaginationState,
} from 'modules/pagination'

export interface GlobalState {
    [CART_NAMESPACE]: CartState
    [SCROLLER_NAMESPACE]: ScrollerState
    [PAGINATION_NAMESPACE]: PaginationState
}

const reducer = combineReducers({
    [CART_NAMESPACE]: cartReducer,
    [SCROLLER_NAMESPACE]: scrollerReducer,
    [PAGINATION_NAMESPACE]: paginationReducer,
})

export const store = createStore(reducer, {}, applyMiddleware(thunk, logger))
