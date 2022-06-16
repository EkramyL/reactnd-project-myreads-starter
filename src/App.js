import React, { useState, useEffect } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';

import Shelf from './components/Shelf';

const App = () => {
  // const [allBooks, setAllBooks] = useState([]);
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [read, setRead] = useState([]);

  // const shelfBooks = async (shelfName)=>{
  //   await books.filter(book => book.shelf === shelfName)
  // }
  useEffect(() => {
    const fetchBooks = async () => {
      const books = await BooksAPI.getAll();
      // setAllBooks(books);
      const currentlyReadingBooks = books.filter(
        (book) => book.shelf === 'currentlyReading'
      );
      setCurrentlyReading(currentlyReadingBooks);
      const wantToReadBooks = books.filter(
        (book) => book.shelf === 'wantToRead'
      );
      setWantToRead(wantToReadBooks);
      const readBooks = books.filter((book) => book.shelf === 'read');
      setRead(readBooks);
    };

    fetchBooks();
  }, []);
  const [showSearchPage, setshowSearchPage] = useState(false);
  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <button
              className="close-search"
              onClick={() => setshowSearchPage(false)}
            >
              Close
            </button>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid" />
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Shelf
                books={currentlyReading}
                shelfTitle={'Currently Reading'}
              />
              <Shelf books={wantToRead} shelfTitle={'Want To Read'} />

              <Shelf books={read} shelfTitle={'Read'} />
            </div>
          </div>
          <div className="open-search">
            <button onClick={() => setshowSearchPage(true)}>Add a book</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
