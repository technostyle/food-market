import { Product } from 'global-constants'
import { ACTION_TYPES } from 'modules/cart/constants'

export const clickProduct = (product: Product) => (dispatch: Function) => {
    dispatch({
        type: ACTION_TYPES.ADD_PRODUCT,
        payload: { ...product, id: Date.now() },
    })
}
