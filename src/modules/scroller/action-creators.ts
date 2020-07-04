import type { Product } from 'global-constants'
import { NAMESPACE, ACTION_TYPES } from './constants'

export const setProducts = (products: Array<Product>) => ({
    type: ACTION_TYPES.SET_PRODUCTS,
    namespace: NAMESPACE,
    payload: products,
})
