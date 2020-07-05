import { prop } from 'utils'
import { CartState } from './constants'

export const addProduct = (state: CartState, payload: any) => {
    const alreadyExists = state.products.map(prop('id')).includes(payload.id)
    if (alreadyExists) {
        return state
    }

    const products = [...state.products]
    products.push(payload)

    return { ...state, products }
}

export const openCart = (state: CartState, payload: any) => {
    return { ...state, isOpen: payload }
}

export const removeProduct = (state: CartState, payload: any) => {
    const newProducts = state.products.filter(({ id }) => id !== payload.id)
    return { ...state, products: newProducts }
}
