import * as React from 'react'
import cartIcon from 'icons/cart.png'
import './header.scss'

interface HeaderProps {
    totalAmount: number
    uniqQuantity: number
    onCartIconClick: () => void
}

export const Header = ({
    totalAmount,
    uniqQuantity,
    onCartIconClick,
}: HeaderProps) => (
    <div className="header">
        <div className="header__item header__title">Food shop</div>
        <div className="header__item header__cart">
            <div className="header__item">totalAmount: {totalAmount}</div>
            <div className="header__item">products: {uniqQuantity}</div>
            <div className="header__item" onClick={onCartIconClick}>
                <img className="header__cart-icon" src={cartIcon} alt=""></img>
            </div>
        </div>
    </div>
)
