import React from 'react'
import pagination from '../utils/pagination'
import Page from './page'

const Pagination = ({ total, activePage, pageLink, handleClick }) => (
    <ul className="pagination">
        {pagination({ total, activePage }).map((page, index) => (
            <li key={index} className={activePage === page ? 'activePage' : null}>
                <Page page={page} pageLink={pageLink.replace('%page%', page)} handleClick={handleClick} />
            </li>
        ))}
    </ul>
)

Pagination.defaultProps = {
    pageLink: '',
    activePage: 1
}



export default Pagination