import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { GlobalState } from 'store'
import {
    getCurrentPage,
    getTotalPages,
    getIsNextPageDisabled,
    getIsPrevPageDisabled,
} from 'modules/pagination/selectors'
import { Footer as Component } from './footer'
import { moveNextPage, movePrevPage } from './actions'

const mapStateToProps = (state: GlobalState) => ({
    currentPage: getCurrentPage(state),
    totalPages: getTotalPages(state),
    isNextPageDisabled: getIsNextPageDisabled(state),
    isPrevPageDisabled: getIsPrevPageDisabled(state),
})

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(
        {
            moveNextPage,
            movePrevPage,
        },
        dispatch
    )

export const Footer = connect(mapStateToProps, mapDispatchToProps)(Component)
