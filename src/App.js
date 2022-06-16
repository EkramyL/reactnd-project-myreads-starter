import React, { useState, useEffect } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';

import Shelf from './components/Shelf';

const App = () => {
  // const [books, setBooks] = useState([]);
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [read, setRead] = useState([]);
  const [changed, setChanged] = useState(false);
  // const shelfBooks = async (shelfName)=>{
  //   await books.filter(book => book.shelf === shelfName)
  // }
  useEffect(
    () => {
      const fetchBooks = async () => {
        const books = await BooksAPI.getAll();
        // setBooks(books);
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
    },
    [changed]
  );
  const [showSearchPage, setshowSearchPage] = useState(false);
  const changeShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    setChanged(!changed);
    // console.log('updateBook', updateBook);
    // // setCurrentlyReading(updateBook.currentlyReading);
    // console.log('currentlyReading', updateBook.currentlyReading);

    // return a book with the given id
    // let thisBook = books.filter((book) => book.id === id)[0];
    // thisBook = { ...thisBook, shelf };
    // // console.log(thisBook);
    // // console.log(shelf);

    // // return all books except the book to change
    // let newBooks = books.filter((book) => book.id !== id);
    // console.log(newBooks);
    // newBooks = [thisBook, ...newBooks];
    // console.log(newBooks);
    // setBooks(newBooks);
  };
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
                changeShelf={changeShelf}
              />
              <Shelf
                books={wantToRead}
                shelfTitle={'Want To Read'}
                changeShelf={changeShelf}
              />

              <Shelf
                books={read}
                shelfTitle={'Read'}
                changeShelf={changeShelf}
              />
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
