import rand from '../FUNCTIONS/randNumbers';

function listReduc(state, action) {
  let newState = [...state];

  switch (action.type) {
    case 'bid_asc':
      newState.sort((a, b) => a.bid - b.bid);
      break;
    case 'bid_desc':
      newState.sort((a, b) => b.bid - a.bid);
      break;
    case 'name_asc':
      newState.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0
      });
      break;
    case 'name_desc':
      newState.sort((a, b) => {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        return 0;
      });
      break;
    case 'name_asc_local':
      newState.sort((a, b) =>
        a.name.localeCompare(b.name));
      break;
    case 'date_asc':
      newState.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        // if (dateA > dateB) return 1;
        // if (dateA < dateB) return -1;
        // return 0;
        return dateA - dateB;
      });
      break;
    case 'date_desc':
      newState.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });
      break;
    case 'random':
      newState.sort(() => rand(0, 1) ? 1 : -1);
      break;

    default:
      newState = [...state];
  }
  return newState;
}

export default listReduc;
