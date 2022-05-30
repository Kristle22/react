import { useState } from 'react'
import './App.scss'
import getId from './FUNCTIONS/getId'

function App() {
  const [kvadr, setKvadr] = useState([])
  const pridetiKv = () => {
    setKvadr((k) => [...k, { id: getId('KVADR'), name: 'Jonas' }])
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={pridetiKv}>Prideti</button>
        <div className='kvc'>
          {kvadr.map((k) => (
            <div className='kv' key={k.id}>
              {k.id}
            </div>
          ))}
        </div>
      </header>
    </div>
  )
}

export default App
