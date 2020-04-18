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
