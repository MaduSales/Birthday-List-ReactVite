import { useState } from 'react'
import './App.css'
import List from './components/List/List'
import data from './components/List/data'

function App() {
  const [birthdayList, setBirthdayList] = useState(data)

  return (
    <main>
      <section className='container'>
        <h3>Front Beginners</h3>
        <h3>{birthdayList.length} aniversário hoje</h3>
        <List birthdayList={birthdayList} />
        <button onClick={() => setBirthdayList([])}>Limpar lista</button>
      </section>
    </main>
  )
}

export default App