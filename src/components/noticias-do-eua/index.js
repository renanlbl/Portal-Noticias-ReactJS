import React from 'react'
import NoticiasCard from './noticias-card'
import Pagination from '../pagination'

const renderUrl = () => {
    let url = window.location.href
    // console.log('Page encontrada')
    let urlSplitada = url.split('/page/')
    // console.log(urlSplitada[0])
    return `${urlSplitada[0]}/page/%page%`       
}

const noticiasDoEua = ( { noticiasDoEua, pagination } ) => (
   
    <div className="container"> 
        
        <NoticiasCard noticiasDoEua={noticiasDoEua} />        
        <Pagination 
            total={pagination.total} 
            activePage={pagination.activePage} 
            pageLink={renderUrl()} 
            
        />
    </div>
)

export default noticiasDoEua