import React from 'react';
import Header from '../components/Header';


const TeamStats = () => {

const data = [

  { }
// fake game data will be inserted here the keys and values will consist of KD, wins, number of players. 


]

  return (
    <>
      <Header />

      <ul>
        {data.map((item) => (
          <li key={item.id}>{InsertEmoticon.name} </li>
        ))}
      </ul>
      {/* above the data will be mapped through all is needed is the array to be set and either pictures and stats to be added.  */}
    </>
  );
}

export default TeamStats