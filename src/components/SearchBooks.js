import React, { useState } from 'react';
import Book from './Book';
import * as BooksAPI from '../BooksAPI';

const SearchBooks = (props) => {
  const [query, setQuery] = useState('');
  const [searchedBooks, setSearchedBooks] = useState('');
  const handleQuery = (query) => {
    setQuery(query.trim());
    // async() = () => {
    //   const searchedBooks = await BooksAPI.search(query);
    //   console.log('searchedBooks', searchedBooks.results);
    // };
    const fetchSearchedBooks = async () => {
      const searchedBooks = await BooksAPI.search(query);
      console.log('query', query);
      console.log('searchedBooks', searchedBooks);
    };
    fetchSearchedBooks();
    setSearchedBooks(searchedBooks);
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search" onClick={() => {}}>
          Close
        </button>
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
          {searchedBooks.length > 0 &&
            searchedBooks.map((book) => (
              <li key={book.id}>
                <Book book={book} changeShelf={props.changeShelf} />
              </li>
            ))}
        </ol>
        <h3>{searchedBooks.length}</h3>
      </div>
      <h2>{query}</h2>
    </div>
  );
};

export default SearchBooks;
