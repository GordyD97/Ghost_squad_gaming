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
  { date: "2024-02-26", time: "12:00 PM", team1: "Team A", team2: "Team B" },
  { date: "2024-02-27", time: "3:30 PM", team1: "Team C", team2: "Team D" },
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
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={[
        { title: "Friday Night Box Fights", date: "2024-02-26" },
        { title: "Satruday Frag", date: "2024-02-27" },
      ]}
      // above the events are added into the code. With the events being hard coded there needs to be a link for the "client"- or site admin 
      // other than me the developer. there either needs to be a link to an admin ui dashboard or 
    />
  );
};

export default EsportsSchedule;



/*     

newEventFill () => {
  this function will be one of the main connections to the admin page. This function allows the admin to update the date, title and link page to the date selected.
CRUD operator will be used here 
};


<FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={[
        { title: "Friday Night Box Fights", date: "2024-01-26" },
        { title: "Satruday Frag", date: "2024-01-27" },
      ]}
      
    />
      events={(newEventFill)[
        { title:`${event.title}`, date: `${event.date}` a href=`${event.link}`},
        { title: `${event.title}`, date: `${event.date}` a href=`${event.link}`},
      ]}}
      
    />






*/