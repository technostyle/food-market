import { setCategory, setProducts } from 'modules/scroller/action-creators'
import { scrollerService } from 'services'

export const onCategoryChange = (category: string) => async (
    dispatch: Function
) => {
    const products = await scrollerService.getProducts({ category, page: 1 })
    dispatch(setProducts(products))
    dispatch(setCategory(category))
}
