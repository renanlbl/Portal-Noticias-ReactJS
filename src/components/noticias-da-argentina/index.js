import React from 'react'
import NoticiasCard from './noticias-card'
import Pagination from '../pagination'

const renderUrl = () => {
    let url = window.location.href
    let urlSplitada = url.split('/page/')  
    return `${urlSplitada[0]}/page/%page%`   
}

{console.log(renderUrl())}

const NoticiasDaArgentina = ( { noticiasDaArgentina, pagination,  } ) => (
   
    <div className="container">         
        <NoticiasCard noticiasDaArgentina={noticiasDaArgentina} />        
        <Pagination 
            total={pagination.total} 
            activePage={pagination.activePage} 
            pageLink={renderUrl()}                                 
        />
    </div>
)




export default NoticiasDaArgentina