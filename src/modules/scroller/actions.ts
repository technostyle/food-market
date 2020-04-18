import { Product } from 'global-constants'
import { ScrollerState } from './constants'

export const setProducts = (state: ScrollerState, payload: Array<Product>) => {
    return { ...state, products: payload }
}
