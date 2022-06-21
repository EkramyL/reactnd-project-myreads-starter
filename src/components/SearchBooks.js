import React, { useState } from 'react';
import Book from './Book';
import * as BooksAPI from '../BooksAPI';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const SearchBooks = (props) => {
  const [query, setQuery] = useState('');
  const [searchedBooks, setSearchedBooks] = useState([]);
  const categorizedBooks = [
    ...props.currentlyReading,
    ...props.wantToRead,
    ...props.read,
  ];

  const handleQuery = (query) => {
    setQuery(query.trimLeft());

    const fetchSearchedBooks = async () => {
      let searchedBooks;
      let finalList;
      if (query !== '') {
        try {
          searchedBooks = await BooksAPI.search(query);

          let newSearchBooks = searchedBooks.filter(
            (searchedBook) =>
              !categorizedBooks.find(({ id }) => searchedBook.id === id)
          );
          let newcatBooks = categorizedBooks.filter((categorizedBook) =>
            searchedBooks.find(({ id }) => categorizedBook.id === id)
          );
          finalList = [...newSearchBooks, ...newcatBooks];
        } catch (err) {
          console.log(err);
        }
      }

      query.length > 0 && searchedBooks.length > 0
        ? setSearchedBooks(finalList)
        : setSearchedBooks([]);
    };
    fetchSearchedBooks();
  };

  const searchInfo = `Searh our Books by the author or The Book name`;
  const noBook = `No Book was found search another book`;
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>

        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={(e) => handleQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {query === ''
            ? searchInfo
            : searchedBooks.length > 0
            ? searchedBooks.map((book) => (
                <li key={book.id}>
                  <Book book={book} changeShelf={props.changeShelf} />
                </li>
              ))
            : noBook}
        </ol>
      </div>
    </div>
  );
};
SearchBooks.propTypes = {
  changeShelf: propTypes.func.isRequired,
};

export default SearchBooks;
