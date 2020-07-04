import type { ScrollerActionTypes } from './constants'
import { NAMESPACE } from './constants'
import { ACTION_TYPES } from './constants'
import type { ScrollerState } from './constants'
import { setProducts } from './actions'

const initialState: ScrollerState = {
    products: [],
}

export const reducer = (
    state: ScrollerState,
    { type, namespace, payload }: ScrollerActionTypes
) => {
    if (namespace !== NAMESPACE) {
        return state || initialState
    }

    switch (type) {
        case ACTION_TYPES.SET_PRODUCTS:
            return setProducts(state, payload)
        default:
            return initialState
    }
}
