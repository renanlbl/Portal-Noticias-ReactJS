import React from 'react'
import NoticiasCard from './noticias-card'
import Pagination from '../pagination'


const NoticiasEmDestaque = ( { noticiasEmDestaque, pagination } ) => (
    <div className="container">        
        <NoticiasCard noticiasEmDestaque={noticiasEmDestaque} />
        <Pagination 
            total={pagination.total} 
            activePage={pagination.activePage} 
            pageLink={`http://localhost:8080/noticias-em-destaque/page/%page%`} 
            
        />
    </div>
)

export default NoticiasEmDestaque