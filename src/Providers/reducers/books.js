export const initialState = {
  books: [],
  categories: [],
  selectedBook: null,
  selectedCategory: null
};

export function reducer(state, action) {
  switch (action.type) {
    case 'POPULATE_BOOKS':
      return {
        ...state,
        books: action.payload.sort((a, b) => b.rating_qty - a.rating_qty),
        categories: Array.from(
          new Set(action.payload.map(({ category }) => category))
        ).sort()
      };
    default:
      return state;
  }
}
