import React from 'react';
import PlayerCard from '../components/PlayerCard';
import Header from '../components/Header';
import Footer from '../components/Footer'

const Players = () => {

// players data object will be created here . 


/* 
  [  
    {id:name,
    src: img,
    description: <P>,
    Links: href,
    }
  ]




*/




  return (
    <>
      <Header />

      <PlayerCard />
     

      {players.map(({ id, src }) => (
        <Grid item xs={2} sm={4} md={3} key={id}>
        {id:"name",
    src: img,
    description: "description. ",
    social: href,
    },
        </Grid>
      ))}

      <Footer />
    </>
  );
}

export default Players