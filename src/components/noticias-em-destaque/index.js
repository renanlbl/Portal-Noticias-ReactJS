import React from 'react'
import NoticiasCard from './noticias-card'


const NoticiasEmDestaque = ( { noticiasEmDestaque } ) => (
    <div className="container">
        <NoticiasCard noticiasEmDestaque={noticiasEmDestaque} />
    </div>
)

export default NoticiasEmDestaque