import React from 'react';

function BookCard(props) {
    return (
        <div key={props.book.id}>
            <h2>{props.book.title}</h2>
            <h4>By {props.book.author}</h4>
            <p>{props.book.synopsis}</p>
            <button
                onClick={() =>
                window.open(
                    `${process.env.REACT_APP_MESSENGER_URL}?ref=command=start_book,book_id=${props.book.id}`
                )
                }
            >
                Read Summary Now!
            </button>
        </div>
    );
}

export default BookCard

{/* <div key={b.id}>
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
              </div> */}