import React from 'react';

const Book = (props) => {
  // const thumb = props.book.imageLinks.smallThumbnail;
  let thumb =
    props.book.hasOwnProperty('imageLinks') &&
    props.book.imageLinks.hasOwnProperty('smallThumbnail')
      ? props.book.imageLinks.smallThumbnail
      : '';
  let bookTitle = props.book.hasOwnProperty('title') ? props.book.title : '';
  let bookAuthor = props.book.hasOwnProperty('authors')
    ? props.book.authors
    : '';
  let shelfValue;

  props.book.hasOwnProperty('shelf')
    ? (shelfValue = props.book.shelf)
    : (shelfValue = 'none');

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${thumb}")`,
          }}
        />
        <div className="book-shelf-changer">
          <select
            defaultValue={shelfValue}
            onChange={(e) => {
              props.changeShelf(props.book, e.target.value);
            }}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{bookTitle}</div>
      <div className="book-authors">{bookAuthor}</div>
    </div>
  );
};

export default Book;
