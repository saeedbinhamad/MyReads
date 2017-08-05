import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Books extends Component {

  static propTypes = {
  booksToShow: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
}


  render() {

    const {booksToShow, onChangeShelf} = this.props


    return (
      <ol className="books-grid">
        {booksToShow && booksToShow.map((book) => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                {book.imageLinks && (
                  <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.smallThumbnail}`}}></div>
                )}
                <div className="book-shelf-changer">
                  <select
                    value={book.shelf}
                    onChange={(event) => onChangeShelf(book, event.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              {book.authors && (
                <div className="book-authors">{book.authors.join(', ')}</div>
              )}
              {book.averageRating && (
                <div className="book-rating">Rating:   {book.averageRating}</div>
              )}
            </div>
          </li>
        ))}
      </ol>
    )
  }
}


export default Books;
