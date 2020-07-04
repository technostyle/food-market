import { SCROLLER_PRODUCTS_URL } from 'global-constants/url'

export const getScrollerProductsUrl = (
    category: string = 'all',
    page: number = 1
) => `${SCROLLER_PRODUCTS_URL}?category=${category}&page=${page}`
