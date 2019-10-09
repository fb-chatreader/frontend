export const initialState = {
  books: []
};

export function reducer(state, action) {
  switch (action.type) {
    case 'POPULATE_BOOKS':
      return { ...state, books: action.payload };
    default:
      return state;
  }
}
