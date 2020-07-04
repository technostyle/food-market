import { ScrollerState } from './constants'

export const setProducts = (state: ScrollerState, payload: any) => {
    return { ...state, products: payload }
}

export const setCategory = (state: ScrollerState, payload: any) => ({
    ...state,
    category: payload,
})
