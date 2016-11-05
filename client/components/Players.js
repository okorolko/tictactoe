import React, { PropTypes } from 'react';
import Score from './Score';


const Players = ({ player, players, currentPlayer, player1Score, player2Score }) => {
  const player1Name = player === 'player1' ? 'You' : players[0];
  const player2Name = player === 'player1' ? players[1] : 'You';
  const playerClass1 = currentPlayer === 'player1' ? 'active-player' : 'player';
  const playerClass2 = currentPlayer === 'player2' ? 'active-player' : 'player';
  return (
    <div className='players__container'>
      <div className={playerClass1}>{player1Name}</div>
        <Score player1Score={player1Score} player2Score={player2Score}/>
      <div className={playerClass2}>{player2Name}</div>
    </div>
  );
};

Players.propTypes = {
  player: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  currentPlayer: PropTypes.string.isRequired,
  player1Score: PropTypes.number.isRequired,
  player2Score: PropTypes.number.isRequired,
};

export default Players;

