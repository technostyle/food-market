import { connect } from 'react-redux'
import { GlobalState } from 'store'
import {
    getProducts,
    getTotalAmount,
    getUniqQuantity,
    getIsCartOpen,
} from 'modules/cart/selectors'
import { onCartClose, removeFromCart, createOrder } from './actions'
import { Cart as Component } from './cart'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state: GlobalState) => ({
    products: getProducts(state),
    totalAmount: getTotalAmount(state),
    isOpen: getIsCartOpen(state),
})

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators({ onCartClose, removeFromCart, createOrder }, dispatch)

export const Cart = connect(mapStateToProps, mapDispatchToProps)(Component)
