import { useEffect, useReducer } from 'react';
import './App.scss';
import axios from 'axios';
import bookReducer from './Reducers/bookReducer';
import bookTypeReducer from './Reducers/bookTypeReducer';

function App() {
  // const [list, setList] = useState([]);

  // useEffect(() => {
  //   axios.get('http://in3.dev/knygos/').then((res) => setList(res.data));
  // }, []);

  const [books, dispachBooks] = useReducer(bookReducer, []);
  const [types, dispachTypes] = useReducer(bookTypeReducer, []);

  // const [reload, setReload] = useReducer(reloadReducer, []);

  useEffect(() => {
    axios.get('http://in3.dev/knygos/').then((res) => {
      const action = {
        type: 'book_list',
        payload: res.data,
      };

      dispachBooks(action);
    });
  }, []);
  console.log(books);

  useEffect(() => {
    axios.get('https://in3.dev/knygos/types/').then((res) => {
      localStorage.setItem('book_type', JSON.stringify(res.data));
      const category = JSON.parse(localStorage.getItem('book_type'));
      console.log('category', category);
      const action = {
        type: 'book_type',
        payload: category,
      };
      dispachTypes(action);
    });
  }, []);

  console.log('types', books);

  const sortBooks = () => {
    const action = {
      type: 'sort',
    };
    dispachBooks(action);
  };
  const defSort = () => {
    const action = {
      type: 'def_sort',
    };
    dispachBooks(action);
  };

  const priceFilter = () => {
    const action = {
      type: 'price_filter',
    };
    dispachBooks(action);
  };

  const reload = () => {
    const action = {
      type: 'reload',
      payload: books,
    };
    dispachBooks(action);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>REDUCER</h1>
        <h2>Book list</h2>
        {books.length ? (
          books.map((el) =>
            el.show ? (
              <div key={el.id}>
                <b>'{el.title}'</b>: {el.price} EUR.{' '}
                <i>
                  {types.map((type) =>
                    type.id === el.type ? type.title : null
                  )}
                </i>
              </div>
            ) : null
          )
        ) : (
          <div className='lds-hourglass'></div>
        )}
        <div>
          <button onClick={sortBooks}>sort Books</button>
          <button onClick={defSort}>defSort Books</button>
          <button onClick={priceFilter}>More than 13 Eur.</button>
          <button onClick={reload}>Reload</button>
        </div>
      </header>
    </div>
  );
}
export default App;
