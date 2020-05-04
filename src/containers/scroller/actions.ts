import { Product } from 'global-constants'
import { scrollerService } from 'services'
// TODO: move action creators to modules/*/actions
import { ACTION_TYPES as CART_ACTIONS } from 'modules/cart/constants'
import { ACTION_TYPES as SCROLLER_ACTIONS } from 'modules/scroller/constants'

export const addToCart = (product: Product) => (dispatch: Function) => {
    dispatch({
        type: CART_ACTIONS.ADD_PRODUCT,
        payload: product,
    })
}

export const fetchProducts = () => async (dispatch: Function) => {
    const products = await scrollerService.getData()
    dispatch({
        type: SCROLLER_ACTIONS.SET_PRODUCTS,
        payload: products,
    })
}
