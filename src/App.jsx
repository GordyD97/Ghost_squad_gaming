import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import PlayerCard from './components/PlayerCard'
import Footer from './components/Footer'
// import TeamStat from './components/TeamStat'
import  Schedule  from './components/Schedule'
import Tournaments from './components/tournaments'
import './App.css'
import { FiberPin } from '@mui/icons-material'
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.jsx";
import Theme from './theme'


function App() {


  return (
    <ThemeProvider theme={Theme}>
     <Router>
      <Switch>
        <Route>Home</Route>
        <Route>Teams</Route>
        <Route>Live matches</Route>
        <Route>Schedule</Route>
        
        {/* pages to everthing goes here. dont know if the router goes under the theme provider or vise versa.  */}
      </Switch>
     </Router>
    </ThemeProvider>
  );
}

export default App


/* <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>  */



    /* <ThemeProvider theme={Theme}>
      <Header />
      <PlayerCard />
      <TeamStat />
      <Schedule />
      <Tournaments />
      add new component called up coming tournaments with cards that contain game title, date and tournament description
      <Footer />
    </ThemeProvider> */