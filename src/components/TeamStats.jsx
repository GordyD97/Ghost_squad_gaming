import React from 'react'
// import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Image from '../assets/imgs/fortnite.jpg'

const TeamStats = () => {

//     export default function MediaControlCard() {
//   const theme = useTheme();


const getStats = (teamData) => {
    teamData = {overall.kills}, {team.kd}, {game.team.wins}, 
// create a data page for team stats. when creating include 3 keys and value pairs to the javascript file. 
// dont forget to import the java script file in the top of the page. Use the javascript file to house more than one cluster of stats. 
}

  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Fortnite
          </Typography>
          {/* font to use Burbank Big Condensed Black Font */}
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            src={Image}
            alt="fortnite cover art"
          />
          {/* <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography> */}

          {/* use the typogrophy above as lsiting the wins taken from data base or another dynamic statistiac that has realtion to the game. exampl
          total wins, team wins, total players, wins from the whole team.  */}
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          {/* <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton> */}
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />

      <div>
        <p>
          {overall.kills}
        </p>
        <p>
          {team.kd}
        </p>
        <p>
          {game.team.wins}
        </p>
      </div>
    </Card>
  );
}

export default TeamStats