import React from 'react'

const url = () => {
    let url = window.location.href.split('/')    
    return `${url[0]}//${url[2]}`
}

const Header = () => (
    <React.Fragment>
    <header className="header__desktop">
            <div className="container">
                <div className="header__desktop--wrapper flexHorizontalVertical">                                        
                    <a href={url()} className="header__logo"></a>
                    <input className="header__search" type="search" />
                </div>               
            </div>
    </header> 
    <header className="header__mobile">
        <div className="header__mobile--wrapper flexHorizontalVertical">
            <i class="fas fa-bars"></i>
            <a href={url()} className="header__logo"></a>
            <i class="fas fa-search"></i>
        </div>
    </header> 
    </React.Fragment>
)

export default Header