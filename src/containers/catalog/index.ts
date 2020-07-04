import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { GlobalState } from 'store'
import { getCategory } from 'modules/scroller/selectors'
import { onCategoryChange } from './actions'
import { Catalog as Component } from './catalog'

const mapStateToProps = (state: GlobalState) => ({
    category: getCategory(state),
})
const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators({ onCategoryChange }, dispatch)
export const Catalog = connect(mapStateToProps, mapDispatchToProps)(Component)
