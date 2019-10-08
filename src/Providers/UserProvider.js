import React, { useReducer, createContext } from 'react';
import { reducer, initialState } from './reducers/user.js';

export const UserContext = createContext();

export function UserProvider(props) {
  const { Provider } = UserContext;

  return (
    <Provider value={useReducer(reducer, initialState)}>
      {props.children}
    </Provider>
  );
}
