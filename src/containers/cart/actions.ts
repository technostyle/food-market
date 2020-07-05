import { openCart, removeProduct } from 'modules/cart/action-creators'
import { Id, Product } from 'global-constants'

export const onCartIconClick = () => (dispatch: Function) => {
    dispatch(openCart(true))
}

export const onCartClose = () => (dispatch: Function) => {
    dispatch(openCart(false))
}

export const removeFromCart = (id: Id) => (dispatch: Function) => {
    dispatch(removeProduct(id))
}

export const createOrder = () => (dispatch: Function) => {
    dispatch(openCart(false))
}
