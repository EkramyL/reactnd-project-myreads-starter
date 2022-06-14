import React, { useState } from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import Book from './components/Book';
import Shelf from './components/Shelf';
const newBooks = [
  {
    title: "The Cuckoo's Calling",
    authors: ['Robert Galbraith'],
    publisher: 'Mulholland Books',
    publishedDate: '2013-04-30',
    description:
      "A brilliant debut mystery in a classic vein: Detective Cormoran Strike investigates a supermodel's suicide. After losing his leg to a land mine in Afghanistan, Cormoran Strike is barely scraping by as a private investigator. Strike is down to one client, and creditors are calling. He has also just broken up with his longtime girlfriend and is living in his office. Then John Bristow walks through his door with an amazing story: His sister, thelegendary supermodel Lula Landry, known to her friends as the Cuckoo, famously fell to her death a few months earlier. The police ruled it a suicide, but John refuses to believe that. The case plunges Strike into the world of multimillionaire beauties, rock-star boyfriends, and desperate designers, and it introduces him to every variety of pleasure, enticement, seduction, and delusion known to man. You may think you know detectives, but you've never met one quite like Strike. You may think you know about the wealthy and famous, but you've never seen them under an investigation like this. Introducing Cormoran Strike, this is the acclaimed first crime novel by J.K. Rowling, writing under the pseudonym Robert Galbraith.",
    industryIdentifiers: [
      {
        type: 'ISBN_13',
        identifier: '9780316206860',
      },
      {
        type: 'ISBN_10',
        identifier: '0316206865',
      },
    ],
    readingModes: {
      text: true,
      image: false,
    },
    pageCount: 464,
    printType: 'BOOK',
    categories: ['Fiction'],
    averageRating: 3.5,
    ratingsCount: 3037,
    maturityRating: 'NOT_MATURE',
    allowAnonLogging: true,
    contentVersion: '1.21.20.0.preview.2',
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false,
    },
    imageLinks: {
      smallThumbnail:
        'http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      thumbnail:
        'http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    },
    language: 'en',
    previewLink:
      'http://books.google.com/books?id=evuwdDLfAyYC&printsec=frontcover&dq=rowling&hl=&cd=4&source=gbs_api',
    infoLink:
      'https://play.google.com/store/books/details?id=evuwdDLfAyYC&source=gbs_api',
    canonicalVolumeLink:
      'https://market.android.com/details?id=book-evuwdDLfAyYC',
    id: 'evuwdDLfAyYC',
    shelf: 'wantToRead',
  },
  {
    title: 'Lords of Finance',
    subtitle: 'The Bankers Who Broke the World',
    authors: ['Liaquat Ahamed'],
    publisher: 'Penguin',
    publishedDate: '2009-01',
    description:
      'Argues that the stock market crash of 1929 and subsequent Depression occurred as a result of poor decisions on the part of four central bankers who jointly attempted to reconstruct international finance by reinstating the gold standard.',
    industryIdentifiers: [
      {
        type: 'ISBN_10',
        identifier: '159420182X',
      },
      {
        type: 'ISBN_13',
        identifier: '9781594201820',
      },
    ],
    readingModes: {
      text: false,
      image: false,
    },
    pageCount: 564,
    printType: 'BOOK',
    categories: ['Business & Economics'],
    averageRating: 4.5,
    ratingsCount: 14,
    maturityRating: 'NOT_MATURE',
    allowAnonLogging: false,
    contentVersion: '1.0.0.0.preview.0',
    imageLinks: {
      smallThumbnail:
        'http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      thumbnail:
        'http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    },
    language: 'en',
    previewLink:
      'http://books.google.com/books?id=74XNzF_al3MC&printsec=frontcover&dq=finance&hl=&cd=1&source=gbs_api',
    infoLink:
      'http://books.google.com/books?id=74XNzF_al3MC&dq=finance&hl=&source=gbs_api',
    canonicalVolumeLink:
      'https://books.google.com/books/about/Lords_of_Finance.html?hl=&id=74XNzF_al3MC',
    id: '74XNzF_al3MC',
    shelf: 'wantToRead',
  },
  {
    title: 'Needful Things',
    authors: ['Stephen King'],
    publisher: 'Simon and Schuster',
    publishedDate: '2016-05-03',
    description:
      'Now available for the first time in a mass-market premium paperback edition—master storyteller Stephen King presents the classic #1 New York Times bestseller about a mysterious store than can sell you whatever you desire—but not without exacting a terrible price in return. “There are two prices for this. Half…and half. One half is cash. The other is a deed. Do you understand?” The town of Castle Rock, Maine has seen its fair share of oddities over the years, but nothing is a peculiar as the little curio shop that’s just opened for business. Its mysterious proprietor, Leland Gaunt, seems to have something for everyone out on display at Needful Things…interesting items that run the gamut from worthless to priceless. Nothing has a price tag in this place, but everything is certainly for sale. The heart’s desire for any resident of Castle Rock can easily be found among the curiosities…in exchange for a little money and—at the specific request of Leland Gaunt—a whole lot of menace against their fellow neighbors. Everyone in town seems willing to make a deal at Needful Things, but the devil is in the details. And no one takes heed of the little sign handing on the wall: Caveat emptor. In other words, let the buyer beware…',
    industryIdentifiers: [
      {
        type: 'ISBN_13',
        identifier: '9781501143786',
      },
      {
        type: 'ISBN_10',
        identifier: '1501143786',
      },
    ],
    readingModes: {
      text: false,
      image: false,
    },
    pageCount: 960,
    printType: 'BOOK',
    categories: ['Fiction'],
    averageRating: 3.5,
    ratingsCount: 28,
    maturityRating: 'NOT_MATURE',
    allowAnonLogging: false,
    contentVersion: '1.3.1.0.preview.0',
    imageLinks: {
      smallThumbnail:
        'http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      thumbnail:
        'http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    },
    language: 'en',
    previewLink:
      'http://books.google.com/books?id=jAUODAAAQBAJ&printsec=frontcover&dq=king&hl=&cd=8&source=gbs_api',
    infoLink:
      'http://books.google.com/books?id=jAUODAAAQBAJ&dq=king&hl=&source=gbs_api',
    canonicalVolumeLink:
      'https://books.google.com/books/about/Needful_Things.html?hl=&id=jAUODAAAQBAJ',
    id: 'jAUODAAAQBAJ',
    shelf: 'read',
  },
];

const aBook = {
  title: 'Learning Web Development with React and Bootstrap',
  authors: ['Harmeet Singh', 'Mehul Bhatt'],
  publishedDate: '2016-12-30',
  description:
    'Build real-time responsive web apps using React and BootstrapAbout This Book* Showcase the power of React-Bootstrap through real-world examples* Explore the benefits of integrating React with various frameworks and APIs* See the benefits of using the latest frameworks to make your web development experience enchantingWho This Book Is ForThis book is for anybody who is interested in modern web development and has intermediate knowledge of HTML, CSS, and JavaScript. Basic knowledge of any JavaScript MVC framework would also be helpful.What You Will Learn* See how to integrate React-Bootstrap with React* Explore the Redux architecture and understand its benefits* Build a custom responsive theme* Easily interact with DOM on your web browser* Appreciate the advantages of using JSX* Get acquainted with the various routing methods in React* Integrate external APIs into ReactIn DetailReact-Bootstrap is one of the most popular front-end frameworks, and integrating it with React allows web developers to write much cleaner code. This book will help you gain a thorough understanding of the React-Bootstrap framework and show you how to build impressive web apps.In this book, you will get an overview of the features of React-Bootstrap and ReactJS, along with the integration of ReactJS components with ReactJS. You will understand the benefits of using JSX and the Redux architecture. The server-side rendering of React will also be shown. All the concepts are explained by developing real-world examples.By the end of this book, you will be equipped to create responsive web applications using React-Bootstrap with ReactJS, and will have an insight into the best practices.',
  industryIdentifiers: [
    {
      type: 'ISBN_10',
      identifier: '1786462494',
    },
    {
      type: 'ISBN_13',
      identifier: '9781786462497',
    },
  ],
  readingModes: {
    text: false,
    image: false,
  },
  pageCount: 278,
  printType: 'BOOK',
  maturityRating: 'NOT_MATURE',
  allowAnonLogging: false,
  contentVersion: 'preview-1.0.0',
  panelizationSummary: {
    containsEpubBubbles: false,
    containsImageBubbles: false,
  },
  imageLinks: {
    smallThumbnail:
      'http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
    thumbnail:
      'http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
  },
  language: 'en',
  previewLink:
    'http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&cd=6&source=gbs_api',
  infoLink:
    'http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&source=gbs_api',
  canonicalVolumeLink:
    'https://books.google.com/books/about/Learning_Web_Development_with_React_and.html?hl=&id=sJf1vQAACAAJ',
  id: 'sJf1vQAACAAJ',
  shelf: 'currentlyReading',
};
const App = () => {
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
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    <li>
                      <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage:
                                'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
                            }}
                          />
                          <div className="book-shelf-changer">
                            <select>
                              <option value="move" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">To Kill a Mockingbird</div>
                        <div className="book-authors">Harper Lee</div>
                      </div>
                    </li>
                    <li>
                      <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 188,
                              backgroundImage:
                                'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")',
                            }}
                          />
                          <div className="book-shelf-changer">
                            <select>
                              <option value="move" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">Ender's Game</div>
                        <div className="book-authors">Orson Scott Card</div>
                      </div>
                    </li>
                    <li>
                      <Book book={aBook} />
                    </li>
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    <li>
                      <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage:
                                'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")',
                            }}
                          />
                          <div className="book-shelf-changer">
                            <select>
                              <option value="move" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">1776</div>
                        <div className="book-authors">David McCullough</div>
                      </div>
                    </li>
                    <li>
                      <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 192,
                              backgroundImage:
                                'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")',
                            }}
                          />
                          <div className="book-shelf-changer">
                            <select>
                              <option value="move" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">
                          Harry Potter and the Sorcerer's Stone
                        </div>
                        <div className="book-authors">J.K. Rowling</div>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    <li>
                      <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 192,
                              backgroundImage:
                                'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")',
                            }}
                          />
                          <div className="book-shelf-changer">
                            <select>
                              <option value="move" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">The Hobbit</div>
                        <div className="book-authors">J.R.R. Tolkien</div>
                      </div>
                    </li>
                    <li>
                      <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 174,
                              backgroundImage:
                                'url("http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api")',
                            }}
                          />
                          <div className="book-shelf-changer">
                            <select>
                              <option value="move" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">
                          Oh, the Places You'll Go!
                        </div>
                        <div className="book-authors">Seuss</div>
                      </div>
                    </li>
                    <li>
                      <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 192,
                              backgroundImage:
                                'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")',
                            }}
                          />
                          <div className="book-shelf-changer">
                            <select>
                              <option value="move" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">
                          The Adventures of Tom Sawyer
                        </div>
                        <div className="book-authors">Mark Twain</div>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
              <Shelf books={newBooks} />
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
