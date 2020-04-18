import * as React from 'react'

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
    <div style={{ border: 'solid brown 4px' }}>
        <button disabled={isPrevPageDisabled} onClick={movePrevPage}>
            {' '}
            PREV{' '}
        </button>
        <button disabled={isNextPageDisabled} onClick={moveNextPage}>
            {' '}
            NEXT{' '}
        </button>
        <div>
            {' '}
            page {currentPage} of {totalPages}
        </div>
    </div>
)
