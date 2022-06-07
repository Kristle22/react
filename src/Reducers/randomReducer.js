import rand from '../FUNCTIONS/randNumbers';

function randomReducer(state, action) {
  let newState;

  switch (action.type) {
    case 'go_rand':
      newState = ('' + rand(0, 1000)).padStart(4, '0');
      break;
    case 'go_rand2':
      newState = ('' + rand(0, 100)).padStart(3, '0');
      break;
    case 'go_text':
      newState = action.payload;
      break;
    default:
      newState = state;
  }
  return newState;
}

export default randomReducer;