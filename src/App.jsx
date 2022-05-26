import { useState } from 'react'
import './App.scss'
import randColor from './FUNCTIONS/randColor'
// import { v4 as uuidv4 } from 'uuid'

function App() {
  const [text, setText] = useState('')
  const [color, setColor] = useState('#f77')
  const [select, setSelect] = useState('tree')
  console.log(select)

  const [chbox, setChbox] = useState({ a: false, b: false, c: true, d: false })
  const [radio, setRadio] = useState('c')

  const insertText = (e) => {
    setText(e.target.value)
    console.log(text)
  }

  const chooseColor = (e) => {
    setColor(e.target.value)
  }

  const cbClick = (e) => {
    setChbox((cb) => ({ ...cb, [e]: !cb[e] }))
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <fieldset>
          <legend>TEXT</legend>
          <input type='text' onChange={insertText} value={text} />
        </fieldset>

        <fieldset style={{ background: color }}>
          <legend>Txt-input COLOR</legend>
          <input type='color' onChange={chooseColor} value={color} />
        </fieldset>

        <fieldset>
          <legend>SELECT</legend>
          <select value={select} onChange={(e) => setSelect(e.target.value)}>
            <option value='one'>Vienas</option>
            <option value='two'>Du</option>
            <option value='three'>trys</option>
            <option value='ten'>Desimt</option>
          </select>
        </fieldset>

        <fieldset>
          <legend>CHECKBOX</legend>
          A
          <input
            type='checkbox'
            checked={chbox.a}
            onChange={() => cbClick('a')}
          />
          B
          <input
            type='checkbox'
            checked={chbox.b}
            onChange={() => cbClick('b')}
          />
          C
          <input
            type='checkbox'
            checked={chbox.c}
            onChange={() => cbClick('c')}
          />
          D
          <input
            type='checkbox'
            checked={chbox.d}
            onChange={() => cbClick('d')}
          />
        </fieldset>

        <fieldset>
          <legend>RADIO Btns</legend>
          A
          <input
            type='radio'
            name='rad'
            value='a'
            checked={radio === 'a'}
            onChange={(e) => setRadio(e.target.value)}
          />
          B
          <input
            type='radio'
            name='rad'
            value='b'
            checked={radio === 'b'}
            onChange={(e) => setRadio(e.target.value)}
          />
          C
          <input
            type='radio'
            name='rad'
            value='c'
            checked={radio === 'c'}
            onChange={(e) => setRadio(e.target.value)}
          />
          D
          <input
            type='radio'
            name='rad'
            value='d'
            checked={radio === 'd'}
            onChange={(e) => setRadio(e.target.value)}
          />
        </fieldset>
      </header>
    </div>
  )
}

export default App
