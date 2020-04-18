import { PaginationState } from './constants'

export const setTotalPages = (state: PaginationState, payload: number) => {
    return { ...state, pagination: payload }
}

export const setCurrentPage = (state: PaginationState, payload: number) => {
    if (state.totalPages < payload) {
        return state
    }

    return { ...state, currentPage: payload }
}

export const increment = (state: PaginationState) => {
    if (state.currentPage === state.totalPages) {
        return state
    }

    return { ...state, currentPage: state.currentPage + 1 }
}

export const decrement = (state: PaginationState) => {
    if (state.currentPage === 1) {
        return state
    }

    return { ...state, currentPage: state.currentPage - 1 }
}
