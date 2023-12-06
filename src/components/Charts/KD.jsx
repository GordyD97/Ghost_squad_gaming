import React from 'react'

const KD = () => {
 { playerName: 'Player 1', kill: 50, death: 25, kdRatio: 2.0 },
  { playerName: 'Player 2', kill: 40, death: 20, kdRatio: 2.0 },

//    the data above is temporary dummy data that is being used to fill the chart with data 

getPlayerData = ({data}) => {
    const playerData = {playerName},{playerKd},{playerKills},{playerDeaths}
}
// above is the start of the function that will retrieve the data from the js file that has the data. 
// later the data will be retireved from a data base using a third party api or using a data base provided by cloud support. 

  return (
     <div>
      <h1>Esports Team Stats</h1>
      <PlayerKDChart data={playerKDData} />
    </div>
}

export default KD