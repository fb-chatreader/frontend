export const initialState = {
  books: {},
  categories: [],
  selectedBook: null,
  selectedCategory: null
};

export function reducer(state, action) {
  switch (action.type) {
    case 'POPULATE_BOOKS':
      const categories = Array.from(
        new Set(action.payload.map(({ category }) => category))
      ).sort();
      const books = {};
      action.payload
        .sort((a, b) => b.rating_qty - a.rating_qty)
        .forEach(b => {
          if (books[b.category]) {
            books[b.category].push(b);
          } else {
            books[b.category] = [b];
          }
        });
      return {
        ...state,
        books,
        categories
      };
    case 'SELECTED_BOOK':
      return { ...state, categories: action.payload };
    case 'SELECTED_CATEGORY':
      return { ...state, selectedCategory: action.payload };
    default:
      return state;
  }
}
