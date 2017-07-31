import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchComponent from './SearchComponent'
import CurrentlyReadingComponent from './CurrentlyReadingComponent'
import WantToReadComponent from './WantToReadComponent'
import ReadComponent from './ReadComponent'
import { Route } from 'react-router-dom'
import {Link} from 'react-router-dom'

class App extends React.Component {
    state = {
    books: []
  }
  
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

//TODO: idk what im doing here.
    searchBook(query, maxResults) {
      BooksAPI.search(query, maxResults).then(books => {
        this.setState(state => ({
          books: state.books.concat([ books ])
        }))
      })
    }

  render() {
    return (
      <div className="app">
        <div className="list-books-title">  <h1>MyReads</h1>  </div>
       
          <Route exact path="/"  render={() => (
            <div>
              <CurrentlyReadingComponent books={this.state.books} />
              <ReadComponent books={this.state.books}/>
              <WantToReadComponent books={this.state.books} />
            </div>
          )}
          />
          <Route  path="/search" render={({ history }) => (
            <SearchComponent books={this.state.books} />
          )}/>
        <Link to="/search" className="open-search"></Link>
      </div>
    )
  }
}

export default App