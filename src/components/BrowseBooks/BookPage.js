import React from 'react';
import { useParams } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookGrid from './BooksGrid';
import SingleBook from './SingleBook';

const BookPage = (props) => {
  console.log('props in BookPage');
  console.log('props in BookPage');
  console.log('props in BookPage');
  console.log(props);
  return (
    <div>
      BOOK PAGES
      <BookGrid />
      <Route path={`/browse/bookpage/${props.book.id}`}>
        <SingleBook />
      </Route>
    </div>
  );
};

export default BookPage;
