import { openCart } from 'modules/cart/action-creators'

export const onCartIconClick = () => (dispatch: Function) => {
    dispatch(openCart(true))
}
