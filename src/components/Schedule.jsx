import React from "react";
import {
  Container,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const scheduleData = [
  { date: "2023-11-01", time: "12:00 PM", team1: "Team A", team2: "Team B" },
  { date: "2023-11-05", time: "3:30 PM", team1: "Team C", team2: "Team D" },
  // Add more schedule data as needed
];

const EsportsSchedule = () => {
  return (
    // <Container maxWidth="md" style={{ marginTop: "2rem" }}>
    //   <Typography variant="h4" align="center" gutterBottom>
    //     Esports Schedule
    //   </Typography>
    //   <TableContainer component={Paper}>
    //     <Table>
    //       <TableHead>
    //         <TableRow>
    //           <TableCell>Date</TableCell>
    //           <TableCell>Time</TableCell>
    //           <TableCell>Team 1</TableCell>
    //           <TableCell>Team 2</TableCell>
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {scheduleData.map((match, index) => (
    //           <TableRow key={index}>
    //             <TableCell>{match.date}</TableCell>
    //             <TableCell>{match.time}</TableCell>
    //             <TableCell>{match.team1}</TableCell>
    //             <TableCell>{match.team2}</TableCell>
    //           </TableRow>
    //         ))}
    //       </TableBody>
    //     </Table>
    //   </TableContainer>
    // </Container>


<FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />
  );
};

export default EsportsSchedule;
