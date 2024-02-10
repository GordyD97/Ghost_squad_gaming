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


  { id: 1, name: 'John Doe', age: 30, city: 'New York' },
  { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
  { id: 3, name: 'Alice Johnson', age: 35, city: 'Chicago' },
  { id: 4, name: 'Bob Brown', age: 28, city: 'Houston' },
  { id: 5, name: 'Emily Davis', age: 32, city: 'San Francisco' }



*/


const playerdata = [
  {
    id: 1,
    name: 'John Doe',
    age: 30,
    hometown: 'New York',
    favoriteGame: 'Fortnite',
    profileImg: 'https://example.com/profile1.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ex a dui fermentum, id sollicitudin magna tincidunt. Nam eget augue vitae metus ultricies posuere.'
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 25,
    hometown: 'Los Angeles',
    favoriteGame: 'Minecraft',
    profileImg: 'https://example.com/profile2.jpg',
    description: 'Pellentesque vel bibendum risus, vel interdum orci. Nam sit amet feugiat odio, sit amet dignissim elit. Sed sit amet enim ut velit volutpat commodo.'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    age: 35,
    hometown: 'Chicago',
    favoriteGame: 'League of Legends',
    profileImg: 'https://example.com/profile3.jpg',
    description: 'Fusce eu ligula vehicula, aliquet nunc nec, consequat est. Integer vitae fermentum sem. Suspendisse potenti. Vestibulum ac tortor ac felis congue cursus.'
  },
  {
    id: 4,
    name: 'Bob Brown',
    age: 28,
    hometown: 'Houston',
    favoriteGame: 'Call of Duty',
    profileImg: 'https://example.com/profile4.jpg',
    description: 'Vivamus nec libero pretium, aliquet arcu eget, euismod purus. Sed vestibulum dolor nec diam feugiat, ut sollicitudin arcu consequat.'
  },
  {
    id: 5,
    name: 'Emily Davis',
    age: 32,
    hometown: 'San Francisco',
    favoriteGame: 'Overwatch',
    profileImg: 'https://example.com/profile5.jpg',
    description: 'Curabitur fermentum justo eget libero maximus, ac viverra leo tristique. Aliquam erat volutpat. Aenean interdum varius ex, vel pellentesque tortor luctus vel.'
  }
]


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