import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const BookPage = () => {
  return (
    <div>
      {/* 
        - Title,
        - Author,
        - image,
        - synopsis,
        - read summary,
        - share options
       */}
      <div>
        <h1>Title</h1>
        <h3>Author</h3>
      </div>
      <div>
        <img src="" />
        <div>synopsis</div>
      </div>
      <div>summary</div>
      <div>share options</div>
    </div>
  );
};

export default BookPage;
