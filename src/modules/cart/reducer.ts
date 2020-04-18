import type { CartActionTypes } from './constants'
import { ACTION_TYPES } from './constants'
import type { CartState } from './constants'
import { addProduct } from './actions'

const initialState: CartState = {
    products: [],
}

export const reducer = (
    state: CartState,
    { type, payload }: CartActionTypes
) => {
    switch (type) {
        case ACTION_TYPES.ADD_PRODUCT:
            return addProduct(state, payload)
        default:
            return initialState
    }
}
