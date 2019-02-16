import React from 'react'
import { Link } from 'react-router-dom'


const Nav = ({ getNewsBrasil, getNewsAll, handleNewsUs }) => (
    <nav className="nav__desktop">
        <div className="container">
            <ul>
                <li><Link onClick={getNewsAll} to="/noticias-em-destaque">notícias em destaque</Link></li>
                <li><Link onClick={getNewsBrasil} to="/noticias-do-brasil">notícias do brasil</Link> </li>
                <li><Link onClick={handleNewsUs} to="/noticias-do-eua">notícias do eua</Link></li>
                <li><Link to="/noticias-da-argentina">notícias da argentina</Link> </li>
                <li><Link to="/noticias-da-franca">notícias da frança</Link> </li>
            </ul>
        </div>     
    </nav>
)

export default Nav