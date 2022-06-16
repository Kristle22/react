function bookTypeReducer(state, action) {
  let newState;

  switch (action.type) {
    case 'book_type':
      newState = action.payload.map((categ, i) => ({ ...categ, row: i, show: true }));
      break;
    default:
      newState = [...state];
  }
  return newState;
}

export default bookTypeReducer;