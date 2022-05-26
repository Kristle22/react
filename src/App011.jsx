import './App.scss'
import { useEffect, useState } from 'react'
import Books from './Components/011/Books'
import axios from 'axios'
import Users from './Components/011/Users'

function App() {
  const [count, setCount] = useState(1)

  const [books, setBooks] = useState([])

  useEffect(() => {
    console.log('Yes') // REDY!
    axios.get('http://in3.dev/knygos/').then((res) => {
      console.log(res.data)
      setBooks(res.data)
    })
  }, [])

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data))
  })

  return (
    <div className='App'>
      <header className='App-header'>
        <div style={{ marginBottom: '50px' }}>
          <h1>{count}</h1>
          <button onClick={() => setCount((c) => c + 1)}>+1</button>
        </div>
        <Books books={books} />
        {/* <Users users={users} /> */}
      </header>
    </div>
  )
}

export default App
