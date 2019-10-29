export const initialState = {
  books: [],
  categories: [],
  selectedBook: null,
  selectedCategory: null
};

export function reducer(state, action) {
  switch (action.type) {
    case 'POPULATE_BOOKS_AND_CATEGORIES':
      return { ...state, books: action.payload.books, categories: action.payload.categories };
      case 'SELECTED_BOOK':
        return { ...state, categories: action.payload };
      case 'SELECTED_CATEGORY':
        return { ...state, selectedCategory: action.payload };
    default:
      return state;
  }
}
