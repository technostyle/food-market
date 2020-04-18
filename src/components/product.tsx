import type { Id } from 'global-constants'
import * as React from 'react'
// import {Product} from 'global-constants'
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
    <div>
        {addToCart ? (
            <button onClick={() => addToCart({ id, image, name, price })}>
                Add to cart
            </button>
        ) : null}
        <div>id: {id}</div>
        <div>img: {image}</div>
        <div>name: {name}</div>
        <div>price: {price}</div>
    </div>
)
