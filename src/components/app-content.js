import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './header'
import Nav from './nav'
import Routes from './routes'

const AppContent = ({ noticiasEmDestaque, noticiasDoBrasil, pagination, getNewsAll, getNewsBrasil, handleRequestBrasil }) => (    
    <div>        
        <Header />      
        <Router> 
            <div>
                <Nav getNewsBrasil={getNewsBrasil} getNewsAll={getNewsAll}  />           
                <Routes 
                    noticiasEmDestaque={noticiasEmDestaque} 
                    noticiasDoBrasil={noticiasDoBrasil}
                    pagination={pagination}                    
                    handleRequestBrasil={handleRequestBrasil}                    
                />
            </div>
        </Router>          
    </div>
)

export default AppContent