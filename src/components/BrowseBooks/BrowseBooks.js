import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { BookContext } from 'Providers/BooksProvider.js';

function BrowseBooks(props) {
  const [state, dispatch] = useContext(BookContext);
  const [categories, setCategories] = useState([]);

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!state.books || !state.books.length) {
      axios.get('/api/books/').then(res => {
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
                <h2>{b.title}</h2>
                <h4>By {b.author}</h4>
                <p>{b.synopsis}</p>
                <button
                  onClick={() =>
                    window.open(
                      `${process.env.REACT_APP_MESSENGER_URL}?ref=command=start_book,book_id=${b.id}`
                    )
                  }
                >
                  Read Summary Now!
                </button>
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
