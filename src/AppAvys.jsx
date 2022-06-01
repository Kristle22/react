import './App.scss'
import { useState } from 'react'
import randColor from './FUNCTIONS/randColor'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [avys, setAvys] = useState([])

  const naujaAvis = () => {
    const avis = {
      id: uuidv4(),
      color: randColor(),
      location: 'ganykla',
    }
    setAvys((a) => [...a, avis])
  }

  const iKirpykla = (avyte) => {
    setAvys((a) => {
      const avis = a.filter((av) => av.id === avyte)[0]
      avis.location = 'kirpykla'
      const banda = a.filter((av) => av.id !== avyte)
      return [...banda, avis]
    })

    // setAvys(a => a.map(av => av.id === avyte ? {...av, location: 'kirpykla'} : av));
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>KIRPYKLA</h1>
        <div className='kvc'>
          {avys
            .filter((a) => a.location === 'kirpykla')
            .map((a) => (
              <div
                key={a.id}
                className='kv'
                style={{ background: a.color }}
              ></div>
            ))}
        </div>
        <h1>AVYS</h1>
        <div className='kvc'>
          {avys
            .filter((a) => a.location === 'ganykla')
            .map((a) => (
              <div
                key='a.id'
                className='kv'
                style={{ background: a.color }}
                onClick={() => iKirpykla(a.id)}
              ></div>
            ))}
        </div>
        <button onClick={naujaAvis}>Nauja Avis</button>
      </header>
    </div>
  )
}

export default App
