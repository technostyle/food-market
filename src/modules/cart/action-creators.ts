import { Product, Id } from 'global-constants'
import { NAMESPACE, ACTION_TYPES } from './constants'

export const addProduct = (payload: Product) => ({
    type: ACTION_TYPES.ADD_PRODUCT,
    namespace: NAMESPACE,
    payload,
})

export const removeProduct = (payload: Id) => ({
    type: ACTION_TYPES.REMOVE_PRODUCT,
    namespace: NAMESPACE,
    payload,
})

export const openCart = (payload: boolean) => ({
    type: ACTION_TYPES.OPEN_CART,
    namespace: NAMESPACE,
    payload,
})
