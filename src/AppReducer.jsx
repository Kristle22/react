import { useReducer } from 'react';
import './App.scss';
import renderReducer from './Reducers/renderReducer';
import randColor from './FUNCTIONS/randColor';

function App() {
  const [render, dispachRender] = useReducer(renderReducer, []);

  const renderRandom = () => {
    const action = {
      type: 'randomNumbers',
    };
    dispachRender(action);
  };
  const sortRandom = () => {
    const action = {
      type: 'sort',
    };
    dispachRender(action);
  };

  const filterUp5000 = () => {
    const action = {
      type: 'more_than',
    };
    dispachRender(action);
  };

  const filterBelow4000 = () => {
    const action = {
      type: 'less_than',
    };
    dispachRender(action);
  };

  const showAll = () => {
    const action = {
      type: 'show_all',
    };
    dispachRender(action);
  };

  const defSort = () => {
    const action = {
      type: 'def_sort',
    };
    dispachRender(action);
  };

  const addBlack = () => {
    const action = {
      type: 'add_black',
    };
    dispachRender(action);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>REDUCER</h1>
        <div className='kvc'>
          {render.map((k, i) =>
            k.show ? (
              <div key={i} className='kv' style={{ background: k.color }}>
                <i>{k.number}</i>
                {/* {k} */}
              </div>
            ) : null
          )}
        </div>
        <button onClick={renderRandom}>Render random</button>
        <button onClick={sortRandom}>Sort random</button>
        <button onClick={defSort}>Default sort</button>
        <button onClick={filterUp5000}>Filter daugiau nei 5000</button>
        <button onClick={filterBelow4000}>Filter maziau nei 4000</button>
        <button onClick={showAll}>Show all again</button>
        <button onClick={addBlack}>Add Black</button>
      </header>
    </div>
  );
}
export default App;
