function listReducer(state, action) {
  let newState;

  switch (action.type) {
    case 'book_title':
      newState = action.payload.map((l, i) => ({ ...l, row: i }));
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
    default:
      newState = [...state];
  }
  return newState;
}

export default listReducer;
