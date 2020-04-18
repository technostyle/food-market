import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { GlobalState } from 'store'
import { getProducts } from 'modules/scroller/selectors'
import { Scroller as Component } from './scroller'
import { addToCart } from './actions'

const mapStateToProps = (state: GlobalState) => ({
    products: getProducts(state),
})

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators({ addToCart }, dispatch)

export const Scroller = connect(mapStateToProps, mapDispatchToProps)(Component)
