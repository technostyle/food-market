import * as React from 'react'
import { Product } from 'global-constants'
import { ProductComponent } from 'components/product'

interface CartProps {
    products: Array<Product>
}

export const Cart = ({ products }: CartProps) => (
    <div style={{ border: 'solid 1px', margin: '10px' }}>
        {products.map((product) => (
            <ProductComponent
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                key={product.id}
            />
        ))}
    </div>
)
