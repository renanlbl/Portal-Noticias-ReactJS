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

const NoticiasDoBrasil = ( { noticiasDoBrasil, pagination,  } ) => (
   
    <div className="container">         
        <NoticiasCard noticiasDoBrasil={noticiasDoBrasil} />        
        <Pagination 
            total={pagination.total} 
            activePage={pagination.activePage} 
            pageLink={renderUrl()}                                 
        />
    </div>
)




export default NoticiasDoBrasil