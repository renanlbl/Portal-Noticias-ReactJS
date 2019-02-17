import React from 'react'
import NoticiasCard from './noticias-card'
import Pagination from '../pagination'

const renderUrl = () => {
    let url = window.location.href
    let urlSplitada = url.split('/page/')
    return `${urlSplitada[0]}/page/%page%`       
}

const NoticiasDaFranca = ( { noticiasDaFranca, pagination,  } ) => (
   
    <div className="container">         
        <NoticiasCard noticiasDaFranca={noticiasDaFranca} />        
        <Pagination 
            total={pagination.total} 
            activePage={pagination.activePage} 
            pageLink={renderUrl()}                                 
        />
    </div>
)




export default NoticiasDaFranca