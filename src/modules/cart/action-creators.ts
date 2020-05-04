import {Product} from 'global-constants'
import {NAMESPACE, ACTION_TYPES} from './constants'

export const addProduct = (payload: Product) => ({
    type: ACTION_TYPES.ADD_PRODUCT,
    namespace: NAMESPACE,
    payload
})

export const removeProduct = (payload: Product) => ({
    type: ACTION_TYPES.REMOVE_PRODUCT,
    namespace: NAMESPACE,
    payload
})
