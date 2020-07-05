import * as React from 'react'
import type { Id } from 'global-constants'
import './cart-product.scss'

interface CartProductType {
    id: Id
    image: string
    name: string
    price: number
    removeFromCart: Function
    key?: any
}

export const CartProduct = ({
    id,
    image,
    name,
    price,
    removeFromCart,
}: CartProductType) => (
    <div className="cart-product">
        <div className="cart-product__item">
            <img className="cart-product__image" src={image} alt="" />
        </div>
        <div className="cart-product__item">{name}</div>
        <div className="cart-product__item">price: {`${price} / kg`}</div>
        <div className="cart-product__item">
            <button
                className="cart-product__remove-button"
                onClick={() => removeFromCart({ id })}
            >
                X
            </button>
        </div>
    </div>
)
