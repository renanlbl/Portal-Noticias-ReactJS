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
            pagination: {
                activePage: 1,
                total: 5
            }
                 
        }
    }
    

    getNoticiasEmDestaque = (lastPage) => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=br&apiKey=06db68aceab74650ac3f9411c46e0796&pageSize=7&page=${lastPage}`)
            .then((response) => {
                console.log(response.data.articles)                
                    this.setState({
                        noticiasEmDestaque: { 
                            request: response.data.articles.map((item, index) => ({
                            title: item.title,
                            date: item.publishedAt,
                            author: item.author,
                            description: item.description
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

    componentDidMount() {
            
        let page = window.location.href.split('/')
        let lastPage = +page[page.length - 1]
        if (isNaN(lastPage)) {
            lastPage = 1
        }        
        
          
        this.getNoticiasEmDestaque(lastPage) 
        
    }


    render() {
        return (
            <AppContent 
                noticiasEmDestaque={this.state.noticiasEmDestaque}  
                pagination={this.state.pagination}              
            />
        )
    }
}

export default App