import { connect } from 'react-redux'
import { GlobalState } from 'store'
import { getTotalAmount, getUniqQuantity } from 'modules/cart/selectors'
import { Header as Component } from './header'

const mapStateToProps = (state: GlobalState) => ({
    totalAmount: getTotalAmount(state),
    uniqQuantity: getUniqQuantity(state),
})

export const Header = connect(mapStateToProps)(Component)
