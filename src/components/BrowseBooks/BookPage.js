import React, { useContext } from 'react';
// import { useParams } from 'react-router';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
// import BookGrid from './BooksGrid';
import SingleBook from './SingleBook';
import { BookContext } from 'Providers/BooksProvider.js';

const BookPage = (props) => {
  const { id } = useParams();
  const [ state, dispatch ] = useContext(BookContext);
  console.log(id);
  const _id = parseInt(id);

  // console.log(state.books[id]);
  const books = [ ...state.books ];
  // console.log(books[0]);
  const book = books.find((e, i) => {
    if (books[i].id === _id) {
      return books[i];
    }
  });

  return (
    <div style={{ width: '100%', height: ' 600px' }}>
      
      <SingleBook book={book} />
    </div>
  );
};

export default BookPage;
