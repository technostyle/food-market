import { Product } from 'global-constants'
import { scrollerService } from 'services'
import { addProduct } from 'modules/cart/action-creators'
import { setProducts } from 'modules/scroller/action-creators'

export const addToCart = (product: Product) => (dispatch: Function) => {
    dispatch(addProduct(product))
}

export const fetchProducts = () => async (dispatch: Function) => {
    const products = await scrollerService.getProducts({
        category: 'all',
        page: 1,
    })
    dispatch(setProducts(products))
}
