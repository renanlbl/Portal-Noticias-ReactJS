import React, { Component } from 'react'
import AppContent from './components/app-content'
import axios from 'axios'

class App extends Component {
    
    constructor() {
        super()
        this.state = {
            noticiasEmDestaque: {
                request: []
            },
            noticiasDoBrasil: {
                request: []
            },
            noticiasDoEua: {
                request: []
            },
            noticiasDaArgentina: {
                request: []
            },
            noticiasDaFranca: {
                request: []
            },
            pagination: {
                activePage: 1,
                total: 5
            },
            openMenu: false
            
        }
    }
    
    getNoticiasEmDestaque = (lastPage) => { 
        axios.get(`https://newsapi.org/v2/everything?q=all&apiKey=06db68aceab74650ac3f9411c46e0796&pageSize=7&page=${lastPage}`)  
            .then((response) => {
                console.log(response.data.articles)                
                    this.setState({
                        noticiasEmDestaque: { 
                            request: response.data.articles.map((item, index) => ({
                            title: item.title,
                            date: item.publishedAt,
                            author: item.author,
                            description: item.description,
                            url: item.url,
                            img: item.urlToImage
                        })) } 
                    })                
            })        
        this.setState({
            pagination: {
                activePage: !lastPage ? 1 : lastPage,
                total: 5
            }
        })        
    }
    
    getNoticiasDoBrasil = (lastPage) => {        
        // let page = window.location.href.split('/')
        // let ultimaPagina = +page[page.length - 1]               
        // if (isNaN(ultimaPagina)) {            
            //     ultimaPagina = 1
        // }  
        // console.log(ultimaPagina)
          
        // console.log(typeof this.state.ultimaPagina)      
        axios.get(`https://newsapi.org/v2/top-headlines?country=br&apiKey=06db68aceab74650ac3f9411c46e0796&pageSize=7&page=${lastPage}`)
        .then((response) => {                            
            this.setState({
                noticiasDoBrasil: { 
                    request: response.data.articles.map((item, index) => ({
                    title: item.title,
                    date: item.publishedAt,
                    author: item.author,
                    description: item.description,
                    url: item.url,
                    img: item.urlToImage
                })) } 
            })                
        })
        this.setState({
            pagination: {
                activePage: !lastPage ? 1 : lastPage,
                total: 5
            }
        })        
    }

    getNoticiasDoEua = (lastPage) => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=06db68aceab74650ac3f9411c46e0796&pageSize=7&page=${lastPage}`)
        .then((response) => {                            
            this.setState({
                noticiasDoEua: { 
                    request: response.data.articles.map((item, index) => ({
                    title: item.title,
                    date: item.publishedAt,
                    author: item.author,
                    description: item.description,
                    url: item.url,
                    img: item.urlToImage
                })) } 
            })                
        })
        this.setState({
            pagination: {
                activePage: !lastPage ? 1 : lastPage,
                total: 5
            }
        })        
    }

    getNoticiasDaArgentina = (lastPage) => { 
        axios.get(`https://newsapi.org/v2/top-headlines?country=ar&apiKey=06db68aceab74650ac3f9411c46e0796&pageSize=7&page=${lastPage}`)
        .then((response) => {                            
            this.setState({
                noticiasDaArgentina: { 
                    request: response.data.articles.map((item, index) => ({
                    title: item.title,
                    date: item.publishedAt,
                    author: item.author,
                    description: item.description,
                    url: item.url,
                    img: item.urlToImage
                })) } 
            })                
        })
        this.setState({
            pagination: {
                activePage: !lastPage ? 1 : lastPage,
                total: 5
            }
        })        
    }
    
    getNoticiasDaFranca = (lastPage) => { 
        axios.get(`https://newsapi.org/v2/top-headlines?country=fr&apiKey=06db68aceab74650ac3f9411c46e0796&pageSize=7&page=${lastPage}`)
        .then((response) => {                            
            this.setState({
                noticiasDaFranca: { 
                    request: response.data.articles.map((item, index) => ({
                    title: item.title,
                    date: item.publishedAt,
                    author: item.author,
                    description: item.description,
                    url: item.url,
                    img: item.urlToImage
                })) } 
            })                
        })
        this.setState({
            pagination: {
                activePage: !lastPage ? 1 : lastPage,
                total: 5
            }
        })        
    }

    componentDidMount = () => {                           
        let page = window.location.href.split('/')        
        let lastPage = +page[page.length - 1]
        if (isNaN(lastPage)) {
            lastPage = 1
        }   
        this.getNoticiasEmDestaque(lastPage) 
        this.getNoticiasDoBrasil(lastPage)  
        this.getNoticiasDoEua(lastPage)  
        this.getNoticiasDaArgentina(lastPage)  
        this.getNoticiasDaFranca(lastPage)  
    }

    refreshPage = () => { 
        this.getNoticiasEmDestaque(1) 
        this.getNoticiasDoBrasil(1)          
        this.getNoticiasDoEua(1)    
        this.getNoticiasDaArgentina(1)    
        this.getNoticiasDaFranca(1)

        this.setState({
            pagination: {
                activePage: 1,
                total: 5
            }
        }) 
    }
    
    handleOpenMenu = () => {
        this.setState({
            openMenu: true
        }) 
    }

    handleCloseMenu = () => {
        this.setState({
            openMenu: false
        }) 
    }

    render() {
        return (
            <div>
            <AppContent 
                noticiasEmDestaque={this.state.noticiasEmDestaque}  
                noticiasDoBrasil={this.state.noticiasDoBrasil}
                noticiasDoEua={this.state.noticiasDoEua}
                noticiasDaArgentina={this.state.noticiasDaArgentina}
                noticiasDaFranca={this.state.noticiasDaFranca}
                handleOpenMenu={this.handleOpenMenu}
                handleCloseMenu={this.handleCloseMenu}
                refreshAll={this.refreshPage}              
                refreshBr={this.refreshPage}                                         
                refreshEua={this.refreshPage}                                         
                refreshAr={this.refreshPage}                                        
                refreshFr={this.refreshPage}            
                pagination={this.state.pagination}  
                openMenu={this.state.openMenu}                
            />            
            </div>
        )
    }
}

export default App