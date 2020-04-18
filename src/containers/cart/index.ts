import { connect } from 'react-redux'
import { GlobalState } from 'store'
import {
    getProducts,
    getTotalAmount,
    getUniqQuantity,
} from 'modules/cart/selectors'
import { Cart as Component } from './cart'

const mapStateToProps = (state: GlobalState) => ({
    products: getProducts(state),
    totalAmount: getTotalAmount(state),
})

export const Cart = connect(mapStateToProps)(Component)
