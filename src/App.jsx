import { useState } from 'react'
import Header from './components/Header'
import PlayerCard from './components/PlayerCard'
import Footer from './components/Footer'
// import TeamStats from './components/TeamStats'
import './App.css'
import { FiberPin } from '@mui/icons-material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     {/* <PlayerCard /> */}
     {/* <TeamStats /> */}
     <Footer />
    </>
  )
}

export default App
