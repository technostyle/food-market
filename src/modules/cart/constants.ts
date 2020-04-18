import type { Id } from 'global-constants'
import { Product } from 'global-constants'

export const NAMESPACE = 'cart'

export const ACTION_TYPES = {
    ADD_PRODUCT: 'ADD_PRODUCT',
    REMOVE_PRODUCT: 'REMOVE_PRODUCT',
}

export interface AddProductAction {
    type: typeof ACTION_TYPES.ADD_PRODUCT
    payload: Product
}

export interface RemoveProductAction {
    type: typeof ACTION_TYPES.REMOVE_PRODUCT
    payload: Id
}

export type CartActionTypes = AddProductAction | RemoveProductAction

export interface CartState {
    products: Array<Product>
}
