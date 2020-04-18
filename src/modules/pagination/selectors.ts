import { createSelector } from 'reselect'
import { prop } from 'utils'

const getDomain = prop('pagination')

export const getCurrentPage = createSelector(getDomain, prop('currentPage'))
export const getTotalPages = createSelector(getDomain, prop('totalPages'))
export const getIsNextPageDisabled = createSelector(
    [getCurrentPage, getTotalPages],
    (current, total) => current === total
)
export const getIsPrevPageDisabled = createSelector(
    getCurrentPage,
    (current) => current === 1
)
