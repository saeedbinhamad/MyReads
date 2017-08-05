import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Books from '../Components/MainPage/Books.js'


class SearchPage extends Component {

  static propTypes = {
  searchResults: PropTypes.array.isRequired,
  onSearch: PropTypes.func.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
}


  render() {

    const { searchResults, onSearch, onChangeShelf } = this.props


    return (
      <div>
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => onSearch(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <Books
            onChangeShelf={onChangeShelf}
            booksToShow={searchResults}
          />
        </div>
      </div>
    )
  }
}




export default SearchPage
