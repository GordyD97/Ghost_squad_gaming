import { useState } from 'react'
import Header from './components/Header'
import PlayerCard from './components/PlayerCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Header /> */}
     <PlayerCard />
    </>
  )
}

export default App
