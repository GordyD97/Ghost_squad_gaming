import React from 'react';
import Header from '../components/Header';
import Footer from './componentes/Footer';
import Livematch from './components/Livematch';
import calendar from '../components/calendar';
import Schedule from '../components/Schedule'
// dont know if i need to import the calendar as well when the schedule component.page will have it already.


const Home = () => {
  return (
    <>
    <Header />
{/* main page where most components will be placed.  */}
    <Livematch />

    <Schedule />
    

    <Footer />

    </>
  )
}

export default Home