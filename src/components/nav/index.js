import React from 'react'
import { Link } from 'react-router-dom'


const Nav = ({ refreshBr, refreshAll, refreshEua, refreshAr, refreshFr, openMenu, handleCloseMenu }) => (
    <React.Fragment>
    <nav className="nav__desktop">
        <div className="container">
            <ul>
                <li onClick={refreshAll}><Link to="/noticias-em-destaque">notícias em destaque</Link></li>
                <li onClick={refreshBr}><Link to="/noticias-do-brasil">notícias do brasil</Link> </li>
                <li onClick={refreshEua}><Link to="/noticias-do-eua">notícias do eua</Link></li>
                <li onClick={refreshAr}><Link to="/noticias-da-argentina">notícias da argentina</Link> </li>
                <li onClick={refreshFr}><Link to="/noticias-da-franca">notícias da frança</Link> </li>
            </ul>
        </div>     
    </nav>
    <nav className={openMenu ? 'nav__mobile' : 'nav__mobile--closed'}>
        <ul>
            <li><Link onClick={refreshAll} to="/noticias-em-destaque">notícias em destaque</Link></li>
            <li><Link onClick={refreshBr} to="/noticias-do-brasil">notícias do brasil</Link> </li>
            <li><Link onClick={refreshEua} to="/noticias-do-eua">notícias do eua</Link></li>
            <li><Link onClick={refreshAr} to="/noticias-da-argentina">notícias da argentina</Link> </li>
            <li><Link onClick={refreshFr} to="/noticias-da-franca">notícias da frança</Link> </li>
        </ul>
    </nav>
    <div onClick={handleCloseMenu} className={openMenu ? 'buttonClose' : 'nav__mobile--closed'}><i class="fas fa-times"></i></div>
    <div className={openMenu ? 'wrapperOpen' : 'wrapperOpenClosed'}></div>
    </React.Fragment>
)

export default Nav