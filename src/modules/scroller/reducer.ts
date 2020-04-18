import type { ScrollerActionTypes } from './constants'
import { ACTION_TYPES } from './constants'
import type { ScrollerState } from './constants'
import { setProducts } from './actions'

const initialProducts = [
    {
        id: 1,
        image: 'image',
        name: 'product 1',
        price: 12,
    },
    {
        id: 2,
        image: 'image',
        name: 'product 2',
        price: 1242342,
    },
    {
        id: 3,
        image: 'image',
        name: 'product 3',
        price: 4512,
    },
    {
        id: 4,
        image: 'image',
        name: 'product 4',
        price: 1235345,
    },
]

const initialState: ScrollerState = {
    products: initialProducts,
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
