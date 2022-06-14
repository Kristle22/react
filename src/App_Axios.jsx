import { useEffect, useReducer, useState } from 'react';
import './App.scss';
import axios from 'axios';
import listReducer from './Reducers/listReducer';

function App() {
  // const [list, setList] = useState([]);

  // useEffect(() => {
  //   axios.get('http://in3.dev/knygos/').then((res) => setList(res.data));
  // }, []);

  const [list, dispachList] = useReducer(listReducer, []);

  useEffect(() => {
    axios.get('http://in3.dev/knygos/').then((res) => {
      const action = {
        type: 'book_title',
        payload: res.data,
      };
      dispachList(action);
    });
  }, []);

  const sortBooks = () => {
    const action = {
      type: 'sort',
    };
    dispachList(action);
  };
  const defSort = () => {
    const action = {
      type: 'def_sort',
    };
    dispachList(action);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>REDUCER</h1>
        <h2>Book list</h2>
        {list.length ? (
          list.map((el) => (
            <div key={el.id}>
              {el.title}: <i>{el.price} EUR.</i>
            </div>
          ))
        ) : (
          <div className='lds-hourglass'></div>
        )}
        <button onClick={sortBooks}>sort Books</button>
        <button onClick={defSort}>defSort Books</button>
      </header>
    </div>
  );
}
export default App;
