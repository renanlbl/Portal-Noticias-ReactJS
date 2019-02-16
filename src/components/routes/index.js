import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import NoticiasEmDestaque from '../noticias-em-destaque'
import NoticiasDoBrasil from '../noticias-do-brasil'
import NoticiasDoEua from '../noticias-do-eua'
import NoticiasDaArgentina from '../noticias-da-argentina'
import NoticiasDaFranca from '../noticias-da-franca'


const Routes = ( {noticiasEmDestaque, noticiasDoBrasil, pagination, handleRequestBrasil } ) => (
    <div>       
        <Route exact path="/" render={() => (            
                <Redirect to="/noticias-em-destaque"/>            
        )}/>
        <Route path="/noticias-em-destaque" render={() => <NoticiasEmDestaque noticiasEmDestaque={noticiasEmDestaque} pagination={pagination}/> } />
        <Route path="/noticias-do-brasil" render={() => <NoticiasDoBrasil noticiasDoBrasil={noticiasDoBrasil} pagination={pagination} handleRequestBrasil={handleRequestBrasil}  />} />
        <Route path="/noticias-do-eua" render={() => <NoticiasDoEua />} />
        <Route path="/noticias-da-argentina" render={() => <NoticiasDaArgentina />} />
        <Route path="/noticias-da-franca" render={() => <NoticiasDaFranca />} />        
    </div>
)

export default Routes