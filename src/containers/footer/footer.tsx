import * as React from 'react'
import './footer.scss'

interface FooterProps {
    currentPage: number
    totalPages: number
    isNextPageDisabled: boolean
    isPrevPageDisabled: boolean
    moveNextPage: any
    movePrevPage: any
}

export const Footer = ({
    currentPage,
    totalPages,
    isNextPageDisabled,
    isPrevPageDisabled,
    moveNextPage,
    movePrevPage,
}: FooterProps) => (
    <div className="footer">
        <div className="footer__pagination">
            <button
                className="pagination__item pagination__button"
                disabled={isPrevPageDisabled}
                onClick={movePrevPage}
            >
                &#8249;
            </button>
            <div className="pagination__item">
                {`${currentPage}/${totalPages}`}
            </div>
            <button
                className="pagination__item pagination__button"
                disabled={isNextPageDisabled}
                onClick={moveNextPage}
            >
                &#8250;
            </button>
        </div>
    </div>
)
