import React from 'react'

const NoticiasCard = ({ noticiasEmDestaque }) => (
    <div>
        <div className="noticias__wrapper--twoDivs">
            {noticiasEmDestaque.slice(0, 2).map((item, index) => (
                <div className="noticias__wrapper">
                    <span>{item.date}</span>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <span>{item.author}</span>
                </div>
            ))}                         
        </div>
        <div className="noticias__wrapper--threeDivs">            
            {noticiasEmDestaque.slice(2, 5).map((item, index) => (
                <div className="noticias__wrapper--three">
                    <span>{item.date}</span>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <span>{item.author}</span>
                </div> 
            ))}             
        </div>
        <div className="noticias__wrapper--twoDivs">
            {noticiasEmDestaque.slice(5, 7).map((item, index) => (
                <div className="noticias__wrapper">
                    <span>{item.date}</span>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <span>{item.author}</span>
                </div>
            ))}  
        </div>      
    </div>
)

export default NoticiasCard