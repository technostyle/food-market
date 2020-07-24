import * as React from 'react'
import { Product, Id } from 'global-constants'
import { CartProduct } from 'components/cart-product'
import './cart.scss'
import cartIcon from 'icons/cart.png'

interface CartProps {
    products: Array<Product>
    isOpen: boolean
    onCartClose: () => void
    removeFromCart: (id: Id) => void
    createOrder: () => void
}

export const Cart = ({
    products,
    isOpen,
    onCartClose,
    removeFromCart,
    createOrder,
}: CartProps) =>
    isOpen ? (
        <div className="overlay" onClick={onCartClose}>
            <div className="cart" onClick={(event) => event.stopPropagation()}>
                <button className="cart__close-button" onClick={onCartClose}>x</button>
                <div className="cart__products">
                    {products.length ? (
                        <>
                            {products.map((product) => (
                                <CartProduct
                                    id={product.id}
                                    image={product.image}
                                    name={product.name}
                                    price={product.price}
                                    removeFromCart={removeFromCart}
                                    key={product.id}
                                />
                            ))}
                            <button
                                className="cart__order-button"
                                onClick={createOrder}
                            >
                                Order
                            </button>
                        </>
                    ) : (
                        <div className="cart_empty">
                            <img className="cart_empty-icon" src={cartIcon} />
                            <h2> Cart is empty </h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    ) : null
