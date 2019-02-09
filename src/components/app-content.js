import React from 'react'
import Teste from './teste'
import Testando from './testando'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

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
                <Link to="/teste">Teste</Link>            
                <Link to="/testando">Testando</Link>            
                <Route path="/teste" component={Teste} />
                <Route path="/testando" component={Testando} />
            </div> 
        </Router>
    </div>
)

export default AppContent