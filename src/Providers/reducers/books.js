export const initialState = {
  books: [],
  categories: []
};

export function reducer(state, action) {
  switch (action.type) {
    case 'POPULATE_BOOKS':
      return { ...state, books: action.payload };
    case 'POPULATE_CATEGORIES':
      return { ...state, categories: action.payload };
    default:
      return state;
  }
}
