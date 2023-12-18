import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';

const matchData = [
  { team1: 'Team A', team2: 'Team B', time: '12:00 PM', status: 'Live' },
  { team1: 'Team C', team2: 'Team D', time: '2:30 PM', status: 'Upcoming' },
  // Add more match data as needed
];

const LiveMatch = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: "2rem" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Live Esports Matches
      </Typography>
      <Grid container spacing={3}>
        {matchData.map((match, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {match.team1} vs {match.team2}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {match.time}
                </Typography>
                <Typography
                  variant="body2"
                  color={match.status === "Live" ? "primary" : "textSecondary"}
                >
                  {match.status}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LiveMatch;