import React from 'react'

const url = () => {
    let url = window.location.href.split('/')    
    return `${url[0]}//${url[2]}`
}

const Header = ({ handleOpenMenu, handleOpenSearch, handleCloseSearch, openSearch }) => (
    <React.Fragment>
    <header className="header__desktop">
            <div className="container">
                <div className="header__desktop--wrapper flexHorizontalVertical">                                        
                    <a href={url()} className="header__logo"></a>
                    <div className="header__search--wrapper">
                        <input id="inputSearchDesktop" className="header__search" type="search" />
                        <i class="fas fa-search"></i>
                    </div>
                </div>               
            </div>
    </header> 


    <div className="header__mobile">
        <div className={!openSearch ? 'header__mobile--wrapper flexHorizontalVertical' : "header__mobile--wrapperClosed"}>
            <i onClick={handleOpenMenu} class="fas fa-bars"></i>
            <a href={url()} className="header__logo"></a>
            <i onClick={handleOpenSearch} class="fas fa-search"></i>
        </div>
        <div className={openSearch ? 'header__mobile--wrapper--search' : "header__mobile--wrapper--searchClosed"}>
            <div className="header__search--wrapper">
                <input className="header__search" type="search" />
                <i class="fas fa-search"></i>
            </div>
            <div onClick={handleCloseSearch} className="buttonCloseSearch"><i class="fas fa-times"></i></div>
        </div>
    </div> 
    </React.Fragment>
)

export default Header