import { CartState } from './constants'

export const addProduct = (state: CartState, payload: any) => {
    const products = [...state.products]
    products.push(payload)
    return { ...state, products }
}
