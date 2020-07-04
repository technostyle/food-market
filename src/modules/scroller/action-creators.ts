import type { Product } from 'global-constants'
import { NAMESPACE, ACTION_TYPES } from './constants'

export const setProducts = (products: Array<Product>) => ({
    type: ACTION_TYPES.SET_PRODUCTS,
    namespace: NAMESPACE,
    payload: products,
})

export const setCategory = (category: string) => ({
    type: ACTION_TYPES.SET_CATEGORY,
    namespace: NAMESPACE,
    payload: category,
})