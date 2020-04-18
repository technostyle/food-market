import { ACTION_TYPES } from 'modules/pagination/constants'

export const moveNextPage = () => (dispatch: Function) => {
    dispatch({
        type: ACTION_TYPES.INCREMENT,
    })
}

export const movePrevPage = () => (dispatch: Function) => {
    dispatch({
        type: ACTION_TYPES.DECREMENT,
    })
}
