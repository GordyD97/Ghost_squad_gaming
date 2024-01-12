import { useState } from 'react'
import Header from './components/Header'
import PlayerCard from './components/PlayerCard'
import Footer from './components/Footer'
// import TeamStat from './components/TeamStat'
import  Schedule  from './components/Schedule'
import Tournaments from './components/tournaments'
import './App.css'
import { FiberPin } from '@mui/icons-material'
import { ThemeProvider } from "@mui/material/styles";
import Theme from './theme'


function App() {


  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <PlayerCard />
      {/* <TeamStat /> */}
      <Schedule />
      <Tournaments />
      {/* add new component called up coming tournaments with cards that contain game title, date and tournament description */}
      <Footer />
    </ThemeProvider>
  );
}

export default App
