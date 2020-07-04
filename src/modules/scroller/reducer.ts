import type { ScrollerActionTypes } from './constants'
import { NAMESPACE } from './constants'
import { ACTION_TYPES } from './constants'
import type { ScrollerState } from './constants'
import { setProducts, setCategory } from './actions'

const initialState: ScrollerState = {
    category: 'all',
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
        case ACTION_TYPES.SET_CATEGORY:
            return setCategory(state, payload)
        default:
            return initialState
    }
}
