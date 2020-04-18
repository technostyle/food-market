import * as React from 'react'
// import {Product} from 'global-constants'
interface ProductComponentType {
    id: Number
    image: String
    name: String
    price: Number
    onClick: Function
}

export const ProductComponent = ({
    id,
    image,
    name,
    price,
    onClick,
}: ProductComponentType) => (
    <div>
        <button onClick={() => onClick({ id, image, name, price })}>
            CLICK ME
        </button>
        <div>id: {id}</div>
        <div>img: {image}</div>
        <div>name: {name}</div>
        <div>price: {price}</div>
    </div>
)
