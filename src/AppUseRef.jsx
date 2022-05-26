import './App.scss'
import randColor from './FUNCTIONS/randColor'
import { useEffect, useRef, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const running = useRef(0)
  const score = useRef()

  const add = () => {
    setCount((c) => c + 1)
    running.current += 3
    console.log(running.current)

    const div = score.current
    console.log(score.current)
    console.log(div.dataset.score)
  }

  const addCat = () => {
    localStorage.setItem('katinukas', JSON.stringify(['Murka', 'Pilkis', 8]))
  }
  const getCat = () => {
    console.log(JSON.parse(localStorage.getItem('katinukas')))
  }
  const remCat = () => {
    localStorage.removeItem('katinukas')
  }

  const [squares, setSquares] = useState(null)

  const addSquares = () => {
    setSquares((sq) => [...sq, randColor()])
  }
  const remSquares = () => {
    setSquares((sq) => sq.slice(1))
  }

  useEffect(() => {
    setSquares(JSON.parse(localStorage.getItem('squares') ?? '[]'))
  }, [])

  useEffect(() => {
    if (null === squares) {
      return
    }
    localStorage.setItem('squares', JSON.stringify(squares))
  }, [squares])

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>useRef LocalStorage {count}</h1>
        <button onClick={add}>+1</button>
        <div ref={score} data-score='The highest result'></div>
        <button onClick={addCat}>Add CAT</button>
        <button onClick={getCat}>Get CAT</button>
        <button onClick={remCat}>Rem CAT</button>
        <div className='kvc'>
          {squares
            ? squares.map((sq, i) => (
                <div className='kv' key={i} style={{ backgroundColor: sq }}>
                  {i}
                </div>
              ))
            : null}
        </div>
        <div style={{ marginBottom: '50px' }}>
          <button onClick={addSquares}>Add sq</button>
          <button onClick={remSquares}> Rem sq</button>
        </div>
      </header>
    </div>
  )
}

export default App
