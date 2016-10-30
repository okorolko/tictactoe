import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Score = ({player1Score, player2Score}) => {
  return (
    <div className='player__score'>{player1Score} : {player2Score}</div>
  )
}

const Players = ({players, currentPlayer, player1Score, player2Score}) => {
  let playerClass1 = currentPlayer === 'player1' ? 'active-player' : 'player';
  let playerClass2 = currentPlayer === 'player2' ? 'active-player' : 'player';
  return (
    <div>
    <ReactCSSTransitionGroup
     transitionName="player"
     transitionAppear={true}
     transitionAppearTimeout={2000}
     transitionEnterTimeout={2000}
     transitionLeaveTimeout={2000}>
     <h1 className="tictactoe-header">TIC TAC TOE 2000</h1>

    <div className='players__container'>

      <div className={playerClass1}>{players[0]}</div>
      <Score player1Score={player1Score} player2Score={player2Score}/>
      <div className={playerClass2}>{players[1]}</div>
    </div>
    </ReactCSSTransitionGroup>

    </div>

  )
}
export default Players
