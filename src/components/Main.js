import React from 'react';
// import * as BooksAPI from '../BooksAPI';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';
const Main = (props) => {
  const { currentlyReading, wantToRead, read } = props;
  //   const [currentlyReading, setCurrentlyReading] = useState([]);
  //   const [wantToRead, setWantToRead] = useState([]);
  //   const [read, setRead] = useState([]);
  //   const [changed, setChanged] = useState(false);

  //   useEffect(
  //     () => {
  //       const fetchBooks = async () => {
  //         const books = await BooksAPI.getAll();
  //         // setBooks(books);
  //         const currentlyReadingBooks = books.filter(
  //           (book) => book.shelf === 'currentlyReading'
  //         );
  //         setCurrentlyReading(currentlyReadingBooks);
  //         const wantToReadBooks = books.filter(
  //           (book) => book.shelf === 'wantToRead'
  //         );
  //         setWantToRead(wantToReadBooks);
  //         const readBooks = books.filter((book) => book.shelf === 'read');
  //         setRead(readBooks);
  //       };

  //       fetchBooks();
  //     },
  //     [changed]
  //   );
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf
            books={currentlyReading}
            shelfTitle={'Currently Reading'}
            changeShelf={props.changeShelf}
          />
          <Shelf
            books={wantToRead}
            shelfTitle={'Want To Read'}
            changeShelf={props.changeShelf}
          />

          <Shelf
            books={read}
            shelfTitle={'Read'}
            changeShelf={props.changeShelf}
          />
        </div>
      </div>
      <Link to="/search" className="open-search">
        <button onClick={() => {}}>Add a book</button>
      </Link>
      {/* <link to="/search" className="open-search" /> */}
    </div>
  );
};

export default Main;
