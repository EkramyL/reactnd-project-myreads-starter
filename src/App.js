import React, { useState, useEffect } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Routes, Route } from 'react-router-dom';
// import Shelf from './components/Shelf';
import Main from './components/Main';
import SearchBooks from './components/SearchBooks';

const App = () => {
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [read, setRead] = useState([]);
  const [changed, setChanged] = useState(false);

  // search
  // const [query, setQuery] = useState('');
  // const [searchedBooks, setSearchedBooks] = useState('');
  // const handleQuery = (query) => {
  //   setQuery(query.trim());
  //   // async() = () => {
  //   //   const searchedBooks = await BooksAPI.search(query);
  //   //   console.log('searchedBooks', searchedBooks.results);
  //   // };
  //   const fetchSearchedBooks = async () => {
  //     const searchedBooks = await BooksAPI.search(query);
  //     console.log('query', query);
  //     console.log('searchedBooks', searchedBooks);
  //   };
  //   fetchSearchedBooks();
  //   setSearchedBooks(searchedBooks);
  // };
  // useEffect(() => {
  //   const fetchSearchedBooks = async () => {
  //     const searchedBooks = await BooksAPI.search(query);
  //     console.log('query', query);
  //     console.log('searchedBooks', searchedBooks);
  //   };
  //   fetchSearchedBooks();
  // }, []);

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
  // const [showSearchPage, setshowSearchPage] = useState(false);

  const changeShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    setChanged(!changed);
  };
  return (
    <div className="app">
      {/* {showSearchPage ? (
        <SearchBooks changeShelf={changeShelf} />
      ) : (
        <Main changeShelf={changeShelf} />
      )} */}
      {
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Main
                changeShelf={changeShelf}
                currentlyReading={currentlyReading}
                wantToRead={wantToRead}
                read={read}
              />
            }
          />
          <Route
            path="/search"
            exact
            element={
              <SearchBooks
                changeShelf={changeShelf}
                currentlyReading={currentlyReading}
                wantToRead={wantToRead}
                read={read}
              />
            }
          />
        </Routes>
      }
    </div>
  );
};

export default App;
