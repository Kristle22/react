import { useState, useReducer, useEffect } from 'react';
import './App.scss';
import colorReducer from './Reducers/colorReducer';
import randomReducer from './Reducers/randomReducer';
import rand from './FUNCTIONS/randNumbers';
import textReducer from './Reducers/textReducer';
import kvadrReducer from './Reducers/kvadrReducer';

function App() {
  const [color, dispachColor] = useReducer(colorReducer, 'yellow');
  const [random, dispachRandom] = useReducer(randomReducer, '0000');

  const [text, dispachText] = useReducer(textReducer, 'New text reducer!');

  const [colorInput, setColorInput] = useState('#f8dd00');

  const [inputText, setInputText] = useState('');

  const [h2, setH2] = useState('');

  const [kvadr, dispachKvadr] = useReducer(kvadrReducer, []);

  const goPink = () => {
    const action = {
      type: 'go_pink',
    };
    dispachColor(action);
  };

  const goYellow = () => {
    const action = {
      type: 'go_y',
    };
    dispachColor(action);
  };

  const goChange = () => {
    const action = {
      type: 'change_color',
    };
    dispachColor(action);
  };

  const goRandom = () => {
    const action = {
      type: 'go_rand',
    };
    dispachRandom(action);
  };

  const goRandom2 = () => {
    const action = {
      type: 'go_rand2',
      payload: rand(0, 100),
    };
    dispachRandom(action);
  };

  const goChangeTo = () => {
    const action = {
      type: 'change_colorTo',
      payload: colorInput,
    };
    dispachColor(action);
  };

  const goChangeText = () => {
    const action = {
      type: 'change_text',
      payload: inputText,
    };
    dispachText(action);
  };

  const goText = () => {
    setH2(inputText);
    const action = {
      type: 'go_text',
      payload: inputText,
    };
    dispachRandom(action);
  };

  const goKvadr = () => {
    const action = {
      type: 'go_kvadr',
    };
    dispachKvadr(action);
  };

  // useEffect(() => {
  //   setInterval(() => dispachColor({ type: 'change_color' }), 3000);
  // }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 style={{ backgroundColor: color }}> Learn useReducer!!!</h1>
        <h1>{text}</h1>
        <i>{inputText}</i>
        <button onClick={goChangeText}>Change Text</button>
        <div className='kvc'>
          {kvadr.map((k, i) => (
            <div key={i} className='kv'>
              {k}
            </div>
          ))}
        </div>
        <button onClick={goKvadr}>GO Kvadr</button>

        <h2>useState H2 value: {h2}</h2>
        <div className='kvc'>
          <button onClick={goPink}>Go pink</button>
          <button onClick={goYellow}>Go yellow</button>
          <button onClick={goChange}>Go and Change</button>
        </div>
        <h2>{random}</h2>
        <div className='kvc'>
          <button onClick={goRandom}>Go random</button>
          <button onClick={goRandom2}>Go random2</button>
          <input
            type='color'
            value={colorInput}
            onChange={(e) => {
              setColorInput(e.target.value);
            }}
          />
          <button onClick={goChangeTo}>this color</button>
          <input
            type='text'
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
          <button onClick={goText}>GO Text</button>
        </div>
      </header>
    </div>
  );
}
export default App;
