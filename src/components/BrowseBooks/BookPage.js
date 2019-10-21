import React from 'react';
import { useParams } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookGrid from './BooksGrid';
import SingleBook from './SingleBook';

const BookPage = (props) => {
  // console.log('props in BookPage');
  // console.log('props in BookPage');
  // console.log('props in BookPage');
  // console.log(props);
  return (
    <div>
      BOOK PAGE
      <Route path="/browse/bookpage/:bookId">
        <SingleBook />
      </Route>
    </div>
  );
};

export default BookPage;
