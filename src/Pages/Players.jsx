import React from 'react';
import PlayerCard from '../components/PlayerCard';
import Header from '../components/Header';
import Footer from '../components/Footer'

const Players = () => {

// players data object will be created here . 



  return (
    <>
      <Header />

      <PlayerCard />
     

      {players.map(({ id, src }) => (
        <Grid item xs={2} sm={4} md={3} key={id}>
          <img
            src={src}
            alt={id}
            width="75px"

            // figure out how to do the box shadow style it is listed as "paper on mui. "
          />
          <p key={id}>{id}</p>
        </Grid>
      ))}

      <Footer />
    </>
  );
}

export default Players