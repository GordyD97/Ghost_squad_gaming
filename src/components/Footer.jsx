import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import logitech from "../assets/imgs/SITE LOGOS/logitechlogo.jpg";
import ducky from '../assets/imgs/SITE LOGOS/duckykb.png';
import twitch from '../assets/imgs/SITE LOGOS/twtich.png';
import hyper from '../assets/imgs/SITE LOGOS/hpyerxlogo.png';
import coorsair from '../assets/imgs/SITE LOGOS/Corsair-logo.png';
import astro from '../assets/imgs/SITE LOGOS/Astro_Gaming_2006.svg';
import vape from '../assets/imgs/SITE LOGOS/CaliBar-Logo.webp';
import thermaltake from '../assets/imgs/SITE LOGOS/thermaltake.svg';
import nuphy from '../assets/imgs/SITE LOGOS/nuphy.webp';
import discord from '../assets/imgs/SITE LOGOS/discord.png';
import { useTheme } from "@mui/material/styles";


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/GordyD97">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
// TODO FIND LOGOS FOR FOOTER like sponsors or team logos.
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function StickyFooter() {

  const logos = [ 

{ id: 'lOGITECH', src: logitech},
{ id: 'DUCKY_KEYBOARDS', src: ducky}, 
{ id: 'TWTICH', src: twitch},
{ id: 'HYPERX', src: hyper}, 
{ id: 'COORSAIR', src: coorsair}, 
{ id: 'ASTRO', src: astro}, 
{ id: 'CALIBAR_VAPE', src: vape},
{ id: 'THERMALTAKE', src: thermaltake}, 
{ id: 'NUPHY', src: nuphy}, 
{ id: 'DISCORD', src: discord}


  ]
/*above you are creating a data array of objexccts for the logos of the "sponsors" in each object you will need to refrence the logo img .png or .svg
to each object then map each object out in the component below with the same style this will be the easiest way and the most uiniform way to complete this task
refrence live portfolio for the complete function
find different logitech logo. png sucks.
*/



function DeepChild() {
  const theme = useTheme();
  return <span>{`spacing ${theme.spacing}`}</span>;


  // above is  a theme template. 
}
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "25vh",
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h5" component="h4" gutterBottom>
            Sticky footer
          </Typography>
          <Typography variant="p" component="p" gutterBottom>
            {"Pin a footer to the bottom of the viewport."}
            {"The footer will move as the main element of the page grows."}
          </Typography>
          <Typography variant="body1">Sticky footer placeholder.</Typography>
        </Container>
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          {/*/////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* in this box there will the logo maping container will be held it is seperated for rendering pruposes. */}

          <box>
            <div sx={{ display: "flex", flexDirection: "column" }}>
              {logos.map(({ id, src }) => (
                <div>
                  <img
                    src={src}
                    alt={id}
                    width="75px"

                    // figure out how to do the box shadow style it is listed as "paper on mui. "
                  />
                  <p key={id}>{id}</p>
                </div>
              ))}
            </div>
          </box>

          {/* //////////////////////////////////////////////////////////////////////////////////////// */}

          <Container maxWidth="sm">
            <Typography variant="body1">
              My sticky footer can be found here.
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}



// add logos to sticky footer. 





