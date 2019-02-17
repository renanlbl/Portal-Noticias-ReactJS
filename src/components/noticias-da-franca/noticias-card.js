import React from 'react'

const formatDate = (date) => {
    let dateFormated = date.split('-')    
    let dayFormated = date.split(':') 
    let dayFinal = dayFormated[0].split('-')[2].replace('T', '-').split('-')[0]    
    return `${dayFinal}-${dateFormated[1]}-${dateFormated[0]}`    
}

const NoticiasCard = ({ noticiasDaFranca }) => (
    <div>
        <div className="noticias__wrapper--twoDivs">
            {noticiasDaFranca.request.slice(0, 2).map((item, index) => (
                <a href={item.url} className="noticias__wrapper" target="_blank">
                    <img src={item.img ? item.img : '#'} />
                    <span>{formatDate(item.date)}</span>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <span>{item.author}</span>
                </a>
            ))}                         
        </div>
        <div className="noticias__wrapper--threeDivs">            
            {noticiasDaFranca.request.slice(2, 5).map((item, index) => (
                <a href={item.url} className="noticias__wrapper--three" target="_blank">
                    <img src={item.img ? item.img : '#'} />
                    <span>{formatDate(item.date)}</span>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <span>{item.author}</span>
                </a> 
            ))}             
        </div>
        <div className="noticias__wrapper--twoDivs">
            {noticiasDaFranca.request.slice(5, 7).map((item, index) => (
                <a href={item.url} className="noticias__wrapper" target="_blank">
                    <img src={item.img ? item.img : '#'} />
                    <span>{formatDate(item.date)}</span>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <span>{item.author}</span>
                </a>
            ))}  
        </div>      
    </div>
)

export default NoticiasCard