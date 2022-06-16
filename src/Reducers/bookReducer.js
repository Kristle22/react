function bookReducer(state, action) {
  let newState;

  switch (action.type) {
    case 'book_list':
      newState = action.payload.map((book, i) => ({ ...book, row: i, show: true }));
      break;
    case 'sort':
      newState = [...state].sort((a, b) => {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
      });
      break;
    case 'def_sort':
      newState = [...state].sort((a, b) => a.row - b.row);
      break;
    case 'reload':
      newState = action.payload.map((book, i) => ({ ...book, row: i, show: true }));
      break;
    case 'price_filter':
      newState = state.map(book => book.price > 13 ? { ...book, show: true } : { ...book, show: false });
      break;
    default:
      newState = [...state];
  }
  return newState;
}

export default bookReducer;
