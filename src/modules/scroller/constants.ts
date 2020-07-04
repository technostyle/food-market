import type { Id } from 'global-constants'
import { Product } from 'global-constants'

export const NAMESPACE = 'scroller'

export const ACTION_TYPES = {
    SET_PRODUCTS: 'SET_PRODUCTS',
    SET_CATEGORY: 'SET_CATEGORY',
}

export interface SetProductsAction {
    type: typeof ACTION_TYPES.SET_PRODUCTS
    namespace: typeof NAMESPACE
    payload: Array<Product>
}

export interface SetCategoryAction {
    type: typeof ACTION_TYPES.SET_CATEGORY
    namespace: typeof NAMESPACE
    payload: string
}

export type ScrollerActionTypes = SetProductsAction | SetCategoryAction

export interface ScrollerState {
    category: string
    products: Array<Product>
}
