import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Books from './Books.js'


class BookShelf extends Component {

  static propTypes = {
  booksOnShelf: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
}


  render () {

    const { booksOnShelf, title, onChangeShelf } = this.props


    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <Books
            booksToShow = {booksOnShelf}
            onChangeShelf= {onChangeShelf}
          />
        </div>
      </div>
    )
  }
}

export default BookShelf;
