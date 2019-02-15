import React, { Component } from 'react'
import AppContent from './components/app-content'
import axios from 'axios'

class App extends Component {

    constructor() {
        super()
        this.state = {
            noticiasEmDestaque: []
        }
    }

    getNoticiasEmDestaque = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=br&apiKey=06db68aceab74650ac3f9411c46e0796&pageSize=7')
            .then((response) => {
                console.log(response.data.articles)                
                    this.setState({
                        noticiasEmDestaque: response.data.articles.map((item, index) => ({
                            title: item.title,
                            date: item.publishedAt,
                            author: item.author,
                            description: item.description
                        }))
                    })                
            })
    }

    componentDidMount() {
        this.getNoticiasEmDestaque()
    }

    render() {
        return (
            <AppContent 
                noticiasEmDestaque={this.state.noticiasEmDestaque}
            />
        )
    }
}

export default App