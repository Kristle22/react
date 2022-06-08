
import rand from '../FUNCTIONS/randNumbers';
import randColor from '../FUNCTIONS/randColor';

function renderReducer(state, action) {
  let newState;

  switch (action.type) {
    case 'randomNumbers':
      newState = [...Array(10)].map((_, i) => ({
        number: ('' + rand(0, 9999)).padStart(4, 0),
        color: randColor(),
        show: true,
        row: i
      }));
      //   newState = [];
      // for (let i = 0;i < 10;i++) {
      //   newState.push(('' + rand(0, 9999)).padStart(4, 0));
      // }
      break;
    case 'sort':
      newState = [...state].sort((a, b) => {
        if (a.number > b.number) return -1;
        if (a.number < b.number) return 1;
        return 0;
      });
      break;
    case 'def_sort':
      newState = [...state].sort((a, b) => a.row - b.row);
      break;
    case 'more_than':
      newState = state.map(obj => obj.number > 5000 ? { ...obj, show: true } : { ...obj, show: false })
      break;
    case 'less_than':
      newState = state.map(obj => obj.number < 4000 ? { ...obj, show: true } : { ...obj, show: false });
      break;
    case 'show_all':
      newState = state.map(obj => ({ ...obj, show: true }));
      break;

    case 'add_black':
      newState = [...state, {
        number: ('' + rand(0, 9999)).padStart(4, 0),
        color: '#000',
        show: true,
        row: state.length
      },];
      break;
    default:
      newState = [...state];
  }
  return newState;
}

export default renderReducer;