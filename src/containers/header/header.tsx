import * as React from 'react'

interface HeaderProps {
    totalAmount: number
    uniqQuantity: number
}

export const Header = ({ totalAmount, uniqQuantity }: HeaderProps) => (
    <div style={{ border: 'solid 3px green' }}>
        <p> totalAmount: {totalAmount}</p>
        <p> uniqQuanitity: {uniqQuantity}</p>
    </div>
)
