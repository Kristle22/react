import './App.scss'
import randColor from './FUNCTIONS/randColor'
import rand from './FUNCTIONS/randNumbers'
import { useEffect, useRef, useState } from 'react'

const cats = ['Mulkis', 'Kakius', 'Pilkius', 'Balčius']
const dogs = ['Sniego', 'Dingo', 'Atsirado', 'Pifas', 'Bobikas']

function App() {
  const [kvadr, setKvadr] = useState(null)
  const istorija = useRef([])
  console.log(istorija.current)

  // PIRMAS KROVIMAS
  useEffect(() => {
    setKvadr(JSON.parse(localStorage.getItem('kvadratukas'))) // gali buti null arba []
  }, [])

  // UZSAUGOS POKYCIUS
  useEffect(() => {
    if (null === kvadr) {
      return
    }
    localStorage.setItem('kvadratukas', JSON.stringify(kvadr))
    istorija.current.unshift(kvadr)
  }, [kvadr])

  const pridetiKvadr = () => {
    const random = rand(5, 10)
    const kv = []
    for (let i = 0; i < random; i++) {
      kv.push('--^o^--')
    }
    setKvadr((k) => (null === k ? [...kv] : [...k, ...kv]))
  }

  const isvalyti = () => {
    setKvadr([])
  }

  const atgal = () => {
    let senas = istorija.current.shift()
    if (!senas) {
      setKvadr([])
    } else if (senas.length === kvadr.length) {
      senas = istorija.current.shift()
      if (!senas) {
        setKvadr([])
      } else {
        setKvadr(senas)
      }
    } else {
      setKvadr(senas)
    }
  }

  const [vardai, setVardai] = useState(['Suniukai ar katinukai?'])

  const katinukuList = () => {
    setVardai((k) => [...k, ...cats])
  }
  const suniukuList = () => {
    setVardai(dogs)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>PRAKTIMUMAS</h1>
        <div className='kvc'>
          {kvadr
            ? kvadr.map((k, i) => (
                <div
                  className='kv'
                  key={i}
                  style={{ backgroundColor: randColor() }}
                >
                  {k}
                </div>
              ))
            : null}
        </div>
        <button onClick={pridetiKvadr}>Prideti</button>
        <button onClick={isvalyti}>Isvalyti</button>
        <button onClick={atgal}>Atgal</button>
        <br />
        <br />
        <br />
        <div
          style={{
            backgroundColor: randColor(),
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          {vardai.map((v, i) => (
            <div key={i}>{v}</div>
          ))}
        </div>
        <button onClick={katinukuList}>katinukai</button>
        <button onClick={suniukuList}>suniukai</button>
        <button onClick={() => setVardai([])}>namo!</button>
      </header>
    </div>
  )
}

export default App
