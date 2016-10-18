import React from 'react'

const Score = ({player1Score, player2Score}) => {
  return (
    <span className='player__score'>{player1Score} : {player2Score}</span>
  )
}

const Players = ({players, currentPlayer, player1Score, player2Score}) => {
  let playerClass1 = currentPlayer === 'player1' ? 'active-player' : 'player';
  let playerClass2 = currentPlayer === 'player2' ? 'active-player' : 'player';
  return (
    <div className='players__container'>
      <span className={playerClass1}>{players[0]}</span>
      <Score player1Score={player1Score} player2Score={player2Score}/>
      <span className={playerClass2}>{players[1]}</span>
    </div>
  )
}
export default Players
