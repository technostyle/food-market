import { createSelector } from 'reselect'
import { prop } from 'utils'
import { Product } from 'global-constants'
import { NAMESPACE } from './constants'

const getDomain = prop(NAMESPACE)

export const getProducts = createSelector(getDomain, prop('products'))

export const getTotalAmount = createSelector(getProducts, (products) =>
    products.reduce(
        (total: number, current: Product) => total + current.price,
        0
    )
)

export const getUniqQuantity = createSelector(getProducts, (products) =>
    products.reduce((total: number) => total + 1, 0)
)

export const getIsCartOpen = createSelector(getDomain, prop('isOpen'))
