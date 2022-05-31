import { useEffect, useState } from 'react'
import './bootstrap.css'
import './crud.scss'
import Create from './Components/crud/Create'
import List from './Components/crud/List'
import Edit from './Components/crud/Edit'
import { create, read, remove } from './FUNCTIONS/localStorage'
// import './App.scss'

function App() {
  const [lastUpdate, setLastUpdate] = useState(new Date())

  const [exes, setExes] = useState(null)

  const [modalData, setModalData] = useState(null)

  const [createData, setCreateData] = useState(null)

  const [deleteData, setDeleteData] = useState(null)

  // Read
  useEffect(() => {
    setExes(read())
  }, [lastUpdate])

  //Create
  useEffect(() => {
    if (null === createData) {
      return
    }
    create(createData)
    setLastUpdate(new Date())
  }, [createData])

  // Delete
  useEffect(() => {
    if (null === deleteData) {
      return
    }
    remove(deleteData)
    setLastUpdate(new Date())
  }, [deleteData])

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <Create setCreateData={setCreateData}></Create>
          </div>
          <div className='col-8'>
            <List
              exes={exes}
              setDeleteData={setDeleteData}
              setModalData={setModalData}
            />
          </div>
        </div>
      </div>
      <Edit modalData={modalData} setModalData={setDeleteData} />
    </>
  )
}
export default App
