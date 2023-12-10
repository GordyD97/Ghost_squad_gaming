import React from 'react'
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Image from '../assets/imgs/picofmeatseniorshowcase-resize.jpg'

const PlayerCard = () => {
  return (

    // multiply cards by 4 x 4 on pages.
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        src={Image}
        image="/static/assets/imgs/picofmeatseniorshowcase-resize.jpg"
        alt="player"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          NightHawk199
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Specializes in Destiny 2, Fortnite Call of Duty and many more racing games that this player dominates in. This Player is also the 
          founder and team manager for Ghost Squad Gaming. 
        </Typography>
      </CardContent>
      <CardActions>
        {/* add social links below to transfer user to links with a links  */}
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default PlayerCard