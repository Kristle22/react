function kvadrReducer(state, action) {
  let newState;

  switch (action.type) {
    case 'go_kvadr':
      newState = [...state, 'kvadr'];
      break;
    default:
      newState = [...state];
  }
  return newState;
}

export default kvadrReducer;