import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './header'
import Nav from './nav'
import Routes from './routes'

const AppContent = ({ noticiasEmDestaque, pagination }) => (    
    <div>        
        <Header />
        {console.log(noticiasEmDestaque)}
        <Router> 
            <div>
                <Nav />           
                <Routes 
                    noticiasEmDestaque={noticiasEmDestaque} 
                    pagination={pagination}
                />
            </div>
        </Router>          
    </div>
)

export default AppContent