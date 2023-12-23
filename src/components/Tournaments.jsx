import React from 'react'
import Paper from '@mui/material/Paper';
import Fortnite from '../assets/imgs/fortnite.jpg'


const Tournaments = () => {
  return (
    <>
      <paper elevation={3}>
        <img src={Fortnite}
        alt="fotnitebanner"
        />
        {/* the component will have dynamic data based on either the game or the date of the up cmoing tournament.  */}

        <p> Solo kill race and Duo Surivial tournamnet up coming!</p>
        <Chip label="Solos" />
        <Chip label="Duos" />
        <Chip label="Kill Race" />
        <Chip label="Battlle Royale" />
      </paper>
    </>
  );
}

export default Tournaments