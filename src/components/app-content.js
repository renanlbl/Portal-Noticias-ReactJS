import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './header'
import Nav from './nav'
import Routes from './routes'

const AppContent = ({ noticiasEmDestaque }) => (
    <div>        
        <Header />
        <Router> 
            <div>
                <Nav />           
                <Routes 
                    noticiasEmDestaque={noticiasEmDestaque} 
                />
            </div>
        </Router>          
    </div>
)

export default AppContent