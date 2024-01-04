import React from "react";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";


import Fortnite from "../assets/imgs/fortnite.jpg";
import BoxFightimg from "../assets/imgs/boxfight.jpeg";

const Tournaments = () => {
  return (
    <>
      <Paper elevation={3}>
        <img src={Fortnite} alt="fotnitebanner" />
        {/* the component will have dynamic data based on either the game or the date of the up cmoing tournament.  */}

        <p> Solo kill race and Duo Surivial tournamnet up coming!</p>
        <Chip label="Solos" />
        <Chip label="Duos" />
        <Chip label="Kill Race" />
        <Chip label="Battlle Royale" />
      </Paper>
      <Paper elevation={3}>
        
        <img  src={BoxFightimg} alt="fotnitebanner" />
        {/* the component will have dynamic data based on either the game or the date of the up cmoing tournament.  */}

        <p> Box fight free forall with Match Bounty</p>
        <Chip label="Solos" />
        <Chip label="Cash prize" />
        <Chip label="Box fights" />
        <Chip label="Battlle Royale" />
        <Chip label="Bounty" />
      </Paper>
    </>
  );
};

export default Tournaments;
