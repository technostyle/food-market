import type { ScrollerActionTypes } from './constants'
import { ACTION_TYPES } from './constants'
import type { ScrollerState } from './constants'
import { setProducts } from './actions'

const initialState: ScrollerState = {
    products: [],
}

export const reducer = (
    state: ScrollerState,
    { type, payload }: ScrollerActionTypes
) => {
    switch (type) {
        case ACTION_TYPES.SET_PRODUCTS:
            return setProducts(state, payload)
        default:
            return initialState
    }
}
