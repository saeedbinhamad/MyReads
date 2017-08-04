import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
// import { Link } from 'react-router-dom'
import './App.css'

class ReadComponent extends Component {

  state = {
    ReadBooks: []
  }

    render() {
      
        let readBooks = this.props.books.filter((book) => book.shelf === 'read')

        return (
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {readBooks.map((book) => (

                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+ book.imageLinks.thumbnail + ')' }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={(e) => BooksAPI.update(book, e.target.value)}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                    ))} 
                    </ol>
                  </div>
                </div>

        )
    }
}

export default ReadComponent