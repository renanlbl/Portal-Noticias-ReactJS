import React from 'react'

const Header = () => (
    <header className="header__desktop">
            <div className="container">
                <div className="header__desktop--wrapper flexHorizontalVertical">                                        
                    <a href="https://google.com.br" target="_blank" className="header__logo"></a>
                    <input className="header__search" type="search" />
                </div>
            </div>
        </header> 
)

export default Header