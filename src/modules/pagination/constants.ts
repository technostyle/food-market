export const NAMESPACE = 'pagination'

export const ACTION_TYPES = {
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
    SET_TOTAL_PAGES: 'SET_TOTAL_PAGES',
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
}

export interface SetCurrentPageAction {
    type: typeof ACTION_TYPES.SET_CURRENT_PAGE
    payload: number
}

export interface SetTotalPagesAction {
    type: typeof ACTION_TYPES.SET_TOTAL_PAGES
    payload: number
}

export interface IncrementAction {
    type: typeof ACTION_TYPES.INCREMENT
    payload?: any
}

export interface DecrementAction {
    type: typeof ACTION_TYPES.DECREMENT
    payload?: any
}

export type PaginationActionTypes =
    | SetCurrentPageAction
    | SetTotalPagesAction
    | IncrementAction
    | DecrementAction

export interface PaginationState {
    currentPage: number
    totalPages: number
}
