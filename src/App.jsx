import { useState } from 'react';
import './App.scss';
import Suo from './Components/024/Suo';
import Duomenys from './Contexts/Duomenys';

function App() {
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(3);

  return (
    <Duomenys.Provider value={{ counter1, counter2 }}>
      <div className='App'>
        <header className='App-header'>
          <h1>CONTEXT</h1>
          <Suo />
          <button onClick={() => setCounter1((c) => c + 1)}>PLUS 1</button>
          <button onClick={() => setCounter2((c) => c + 3)}>PLUS 3</button>
        </header>
      </div>
    </Duomenys.Provider>
  );
}
export default App;
