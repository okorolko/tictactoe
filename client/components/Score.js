import React, { PropTypes } from 'react';

const Score = ({ player1Score, player2Score }) => {
  return (
    <div className="player__score">{player1Score} : {player2Score}</div>
  );
};

Score.propTypes = {
  player1Score: PropTypes.number.isRequired,
  player2Score: PropTypes.number.isRequired,
};

export default Score;
