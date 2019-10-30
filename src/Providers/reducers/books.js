export const initialState = {
  books: [],
  categories: [],
  selectedBook: null,
  selectedCategory: null
};

export function reducer(state, action) {
  switch (action.type) {
    case 'POPULATE_BOOKS':
      console.log('DATA: ', action.payload);
      return {
        ...state,
        books: action.payload,
        categories: Array.from(
          new Set(action.payload.map(({ category }) => category))
        ).sort()
      };
    case 'SELECTED_BOOK':
      return { ...state, categories: action.payload };
    case 'SELECTED_CATEGORY':
      return { ...state, selectedCategory: action.payload };
    default:
      return state;
  }
}
