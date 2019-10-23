import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import BookGrid from './BooksGrid';
import SingleBook from './SingleBook';
// import { BookContext } from 'Providers/BooksProvider.js';

const BookPage = props => {
  const { id } = useParams();

  console.log(id);
  /**
   * Component: Book title list
   * Component: Individual book summary
   */

  return (
    <div style={{ width: '100%', height: ' 600px' }}>
      BOOK PAGE
      <SingleBook />
    </div>
  );
};

export default BookPage;
