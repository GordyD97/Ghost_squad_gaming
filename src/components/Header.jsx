import React from 'react'
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";


const Header = () => {
  return (
    <AppBar>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <div>Home</div>
        <div>Team</div>
        <div>Players</div>
        <div>Schedule</div>
        <div>live Match</div>
        <div>Team Stats</div>
      </Stack>
    </AppBar>
  );
}

export default Header