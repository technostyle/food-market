import * as React from 'react'
import {keys} from 'lodash'
import './catalog.scss'
import {CATEGORIES, CATEGORY_NAMES} from './constants'

interface CatalogProps {
    category: string,
    onCategoryChange: Function
}

export const Catalog = ({category: activeCategory,onCategoryChange}: CatalogProps) => (
    <div className="catalog">
        {keys(CATEGORIES).map((category, index) => (
            <div 
            key={index}
            className={`catalog__category ${CATEGORIES[category] === activeCategory ? 'catalog__category_active': ''}`}
            onClick={() => onCategoryChange(CATEGORIES[category])}>{CATEGORY_NAMES[category]}</div>
        ))}
    </div>
)
