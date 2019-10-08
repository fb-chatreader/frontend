import React from 'react';
import { BooksProvider } from './BooksProvider.js';
import { UserProvider } from './UserProvider.js';

function Providers(props) {
  return (
    <BooksProvider>
      <UserProvider>{props.children}</UserProvider>
    </BooksProvider>
  );
}

export default Providers;
