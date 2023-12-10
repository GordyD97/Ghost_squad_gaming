import { useState } from 'react'
import Header from './components/Header'
import PlayerCard from './components/PlayerCard'
import TeamStats from './components/TeamStats'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Header /> */}
     {/* <PlayerCard /> */}
     <TeamStats />
    </>
  )
}

export default App
