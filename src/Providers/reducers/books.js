export const initialState = {
  books: [],
  categories: [],
  selected: null
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
    case 'SELECT_CATEGORY':
      return { ...state, selected: action.payload };
    default:
      return state;
  }
}
