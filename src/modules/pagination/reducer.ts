import type { PaginationActionTypes } from './constants'
import type { PaginationState } from './constants'
import { ACTION_TYPES } from './constants'
import { increment, decrement, setTotalPages, setCurrentPage } from './actions'

const initialState: PaginationState = {
    currentPage: 1,
    totalPages: 1,
}

export const reducer = (
    state: PaginationState,
    { type, payload }: PaginationActionTypes
) => {
    switch (type) {
        case ACTION_TYPES.SET_CURRENT_PAGE:
            return setCurrentPage(state, payload)
        case ACTION_TYPES.SET_TOTAL_PAGES:
            return setTotalPages(state, payload)
        case ACTION_TYPES.INCREMENT:
            return increment(state)
        case ACTION_TYPES.DECREMENT:
            return decrement(state)

        default:
            return initialState
    }
}
