import React from 'react';

const Book = (props) => {
  const thumb = props.book.imageLinks.smallThumbnail;
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
            defaultValue={props.book.shelf || 'none'}
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
      {/* {console.log(props.book.imageLinks.smallThumbnail)}
      {console.log(props.book.authors)} */}
    </div>
  );
};

export default Book;
