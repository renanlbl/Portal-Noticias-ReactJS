import React from 'react'

const NoticiasCard = ({ noticiasDoBrasil }) => (
    <div>
        <div className="noticias__wrapper--twoDivs">
            {noticiasDoBrasil.request.slice(0, 2).map((item, index) => (
                <a href={item.url} className="noticias__wrapper" target="_blank">
                    <span>{item.date}</span>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <span>{item.author}</span>
                </a>
            ))}                         
        </div>
        <div className="noticias__wrapper--threeDivs">            
            {noticiasDoBrasil.request.slice(2, 5).map((item, index) => (
                <a href={item.url} className="noticias__wrapper--three" target="_blank">
                    <span>{item.date}</span>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <span>{item.author}</span>
                </a> 
            ))}             
        </div>
        <div className="noticias__wrapper--twoDivs">
            {noticiasDoBrasil.request.slice(5, 7).map((item, index) => (
                <a href={item.url} className="noticias__wrapper" target="_blank">
                    <span>{item.date}</span>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <span>{item.author}</span>
                </a>
            ))}  
        </div>      
    </div>
)

export default NoticiasCard