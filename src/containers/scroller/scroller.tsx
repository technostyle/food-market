import * as React from 'react'
import { Product } from 'global-constants'
import { ProductComponent } from 'components/product'

interface ScrollerProps {
    products: Array<Product>
    addToCart?: Function
}

export const Scroller = ({ products, addToCart }: ScrollerProps) => {
    return (
        <div style={{ border: 'solid 1px red', margin: '10px' }}>
            {products.map((product) => (
                <ProductComponent
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    addToCart={addToCart}
                    key={product.id}
                />
            ))}
        </div>
    )
}
