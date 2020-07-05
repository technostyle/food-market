import type { Id } from 'global-constants'
import { Product } from 'global-constants'

export const NAMESPACE = 'cart'

export const ACTION_TYPES = {
    ADD_PRODUCT: 'ADD_PRODUCT',
    REMOVE_PRODUCT: 'REMOVE_PRODUCT',
    OPEN_CART: 'OPEN_CART',
}

export interface AddProductAction {
    type: typeof ACTION_TYPES.ADD_PRODUCT
    namespace: typeof NAMESPACE
    payload: Product
}

export interface RemoveProductAction {
    type: typeof ACTION_TYPES.REMOVE_PRODUCT
    namespace: typeof NAMESPACE
    payload: Id
}

export interface OpenAction {
    type: typeof ACTION_TYPES.OPEN_CART
    namespace: typeof NAMESPACE
    payload: boolean
}

export type CartActionTypes =
    | AddProductAction
    | RemoveProductAction
    | OpenAction

export interface CartState {
    products: Array<Product>
    isOpen: boolean
}
