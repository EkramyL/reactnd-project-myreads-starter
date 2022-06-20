import React from 'react';

const Book = (props) => {
  const thumb = props.book.imageLinks.smallThumbnail;
  let shelfValue;

  // if (
  //   props.book.shelf !== 'currentlyReading' ||
  //   props.book.shelf !== 'wantToRead' ||
  //   props.book.shelf !== 'read'
  // ) {
  //   props.book.shelf = 'none';
  // }

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
              // console.log(props.book.id);
              // console.log(e.target.value);

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
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.authors}</div>
    </div>
  );
};

export default Book;
