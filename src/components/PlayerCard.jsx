import React from 'react'
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";


import ProfilePic from '../assets/imgs/pfp/forty.jpg';
import { ThemeProvider } from '@emotion/react';

const PlayerCard = () => {
  return (
    // multiply cards by 4 x 4 on pages.
     <ThemeProvider theme={theme}>
    <Card sx={{ maxWidth: 345 }}>
      <img
        style={{ height: 140, width: "50%", margin: "auto"  }}
        src={ProfilePic}
        alt="player"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          NightHawk199
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Specializes in Destiny 2, Fortnite Call of Duty and many more racing
          games that this player dominates in. This Player is also the founder
          and team manager for Ghost Squad Gaming.
        </Typography>
      </CardContent>
      <CardActions>
        {/* add social links below to transfer user to links with a links  */}
        <Button size="small">Social links</Button>
        <Button size="small">Player Stats</Button>
        <Button size="small">Tournamnet Apereances</Button>
      </CardActions>
    </Card>
    </ThemeProvider>
  );
}

export default PlayerCard