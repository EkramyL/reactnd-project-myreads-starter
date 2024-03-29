import React from 'react';

import { Link } from 'react-router-dom';
import Shelf from './Shelf';
import propTypes from 'prop-types';
const Main = (props) => {
  const { currentlyReading, wantToRead, read } = props;

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
    </div>
  );
};

Main.propTypes = {
  currentlyReading: propTypes.array.isRequired,
  wantToRead: propTypes.array.isRequired,
  read: propTypes.array.isRequired,
  changeShelf: propTypes.func.isRequired,
};
export default Main;
