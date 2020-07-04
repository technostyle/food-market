import type { Id } from 'global-constants'
import * as React from 'react'
import './product.scss'

interface ProductComponentType {
    id: Id
    image: string
    name: string
    price: number
    addToCart?: Function
    key?: any
}

export const ProductComponent = ({
    id,
    image,
    name,
    price,
    addToCart,
}: ProductComponentType) => (
    <div
        className={
            addToCart ? 'product catalog-product' : 'product cart-product'
        }
    >
        <div className="product-info-item">
            <img className="product__image" src={image} alt=''/>
        </div>
        <div className="product-info-item">name: {name}</div>
        <div className="product-info-item">price: {price}</div>
        {addToCart ? (
            <button
                className="add-cart-button"
                onClick={() => addToCart({ id, image, name, price })}
            >
                Add to cart
            </button>
        ) : null}
    </div>
)
