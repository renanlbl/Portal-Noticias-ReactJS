import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import Nav from './nav'
import Routes from './routes'

const AppContent = () => (
    <div>        
        <header className="header__desktop">
            <div className="container">
                <div className="header__desktop--wrapper flexHorizontalVertical">                                        
                    <a href="https://google.com.br" target="_blank" className="header__logo"></a>
                    <input className="header__search" type="search" />
                </div>
            </div>
        </header>        
        <Router> 
            <div>
                <Nav />           
                <Routes />
            </div>
        </Router>  
    </div>
)

export default AppContent