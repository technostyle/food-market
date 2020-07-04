import { createSelector } from 'reselect'
import { prop } from 'utils'
import { NAMESPACE } from './constants'

const getDomain = prop(NAMESPACE)

export const getProducts = createSelector(getDomain, prop('products'))

export const getCategory = createSelector(getDomain, prop('category'))
