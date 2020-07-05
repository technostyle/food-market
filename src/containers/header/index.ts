import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { GlobalState } from 'store'
import { getTotalAmount, getUniqQuantity } from 'modules/cart/selectors'
import { onCartIconClick } from './actions'
import { Header as Component } from './header'

const mapStateToProps = (state: GlobalState) => ({
    totalAmount: getTotalAmount(state),
    uniqQuantity: getUniqQuantity(state),
})

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators({ onCartIconClick }, dispatch)

export const Header = connect(mapStateToProps, mapDispatchToProps)(Component)
