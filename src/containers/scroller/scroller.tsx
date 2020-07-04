import * as React from 'react'
import { useEffect } from 'react'
import { Product } from 'global-constants'
import { ProductComponent } from 'components/product'
import './scroller.scss'

interface ScrollerProps {
    products: Array<Product>
    fetchProducts: Function
    addToCart?: Function
}

export const Scroller = ({
    products,
    fetchProducts,
    addToCart,
}: ScrollerProps) => {
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="data-table">
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
