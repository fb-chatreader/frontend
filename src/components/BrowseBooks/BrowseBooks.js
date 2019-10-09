import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { BookContext } from 'Providers/BooksProvider.js';
import BookCard from './BookCard';

function BrowseBooks(props) {
  const [state, dispatch] = useContext(BookContext);
  const [categories, setCategories] = useState([]);
  console.log('categories:', categories);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!state.books || !state.books.length) {
      axios.get('/api/books/').then(res => {
        console.log('api/books response:', res.data);
        setCategories(
          Array.from(new Set(res.data.map(({ category }) => category))).sort()
        );
        dispatch({ type: 'POPULATE_BOOKS', payload: res.data });
      });
    }
  }, [state.books, dispatch]);
  
  return (
    <div>
      <ul>
        <li>Genres</li>
        {categories.map(category => (
          <li
            key={category}
            onClick={e => setSelected(category)}
            style={{
              backgroundColor:
                selected === category ? 'rgba(0,0,0,0.1)' : 'initial'
            }}
          >
            {category} (
            {state.books.filter(b => b.category === category).length})
          </li>
        ))}
      </ul>
      {selected ? (
        state.books
          .filter(b => b.category === selected)
          .sort((a, b) => b.rating_qty - a.rating_qty)
          .map(b => {
            return (
              <div key={b.id}>
                <BookCard book={b}/>
              </div>
            );
          })
      ) : (
        <p>Please select a genre to continue</p>
      )}
    </div>
  );
}

export default BrowseBooks;
