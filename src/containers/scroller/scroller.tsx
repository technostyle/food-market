import * as React from 'react'
import { Product } from 'global-constants'
import { ProductComponent } from 'components/product'

interface ScrollerProps {
    products: Array<Product>
    clickProduct: Function
}

export const Scroller = ({ products, clickProduct }: ScrollerProps) => {
    return (
        <div>
            {products.map((product) => (
                <ProductComponent
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    onClick={clickProduct}
                />
            ))}
        </div>
    )
}
