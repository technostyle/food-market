import type { CartActionTypes } from './constants'
import { ACTION_TYPES } from './constants'
import type { CartState } from './constants'
import { addProduct } from './actions'

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
const initialState: CartState = {
    products: initialProducts,
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
