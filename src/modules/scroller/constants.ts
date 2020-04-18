import type { Id } from 'global-constants'
import { Product } from 'global-constants'

export const NAMESPACE = 'scroller'

export const ACTION_TYPES = {
    SET_PRODUCTS: 'SET_PRODUCTS',
}

export interface SetProductsAction {
    type: typeof ACTION_TYPES.SET_PRODUCTS
    payload: Array<Product>
}

export type ScrollerActionTypes = SetProductsAction

export interface ScrollerState {
    products: Array<Product>
}
