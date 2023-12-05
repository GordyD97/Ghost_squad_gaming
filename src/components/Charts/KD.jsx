import React from 'react'

const KD = () => {
 { playerName: 'Player 1', kill: 50, death: 25, kdRatio: 2.0 },
  { playerName: 'Player 2', kill: 40, death: 20, kdRatio: 2.0 },

//    the data above is temporary dummy data that is being used to fill the chart with data 

  return (
     <div>
      <h1>Esports Team Stats</h1>
      <PlayerKDChart data={playerKDData} />
    </div>
}

export default KD