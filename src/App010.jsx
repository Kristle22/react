import { useState } from 'react'
import './App.css'
import randColor from './FUNCTIONS/randColor'

function App() {
  const [spalva, setSpalva] = useState('yellow')

  const keistiSpalva = () => {
    // const nauja = spalva === 'yellow' ? 'pink' : 'yellow'; BLOGAI!!!!!
    setSpalva((senojiSpalva) => (senojiSpalva === 'yellow' ? 'pink' : 'yellow'))
    // console.log(spalva);
  }

  const [number, setNumber] = useState(1)

  const increaseNumber = () => {
    setNumber((initialNumber) => initialNumber + 1)
  }

  const decreaseNumber = () => {
    setNumber((initialNumber) => initialNumber - 1)
  }

  const [square, setSquare] = useState([])

  const addSquares = () => {
    setSquare((sq) => [...sq, randColor()])
  }

  const remSquares = () => {
    setSquare((sq) => sq.slice(1))
  }

  const mygtukas = () => {
    // console.log('Aš gražus mygtukas');
    return mygtukoBrolis
  }

  const mygtukoBrolis = () => {
    console.log('Aš gražus mygtuko brolis')
  }

  const beArgumentu = () => {
    console.log('beArgumentu')
  }

  const suArgumentu = (ka) => {
    console.log('suArgumentu: ' + ka)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 style={{ color: spalva }}>STATE_{number}</h1>

        <div className='kvc'>
          {square.map((sq, i) => (
            <div className='kv' key={i} style={{ backgroundColor: sq }}>
              {i}
            </div>
          ))}
        </div>
        <button onClick={mygtukas}>Mygtukas</button>
        <button onClick={beArgumentu}>BE</button>
        <button onClick={() => suArgumentu('labas')}>SU</button>
        <button onClick={keistiSpalva}>Kita spalva</button>
        <button onClick={increaseNumber}>Increase</button>
        <button onClick={decreaseNumber}>Decrease</button>
        <button onClick={addSquares}>ADD [SQ]</button>
        <button onClick={remSquares}>REM [SQ]</button>
      </header>
    </div>
  )
}

export default App
