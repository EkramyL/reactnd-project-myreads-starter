import React from 'react';
import Book from './Book';
const Shelf = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">New Shelf</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map((book) => (
            <li>
              <Book book={book} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;