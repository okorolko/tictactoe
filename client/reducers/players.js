export const players = (state = { secondPlayerDiconnected: false }, action) => {
  switch (action.type) {
    case 'SET_PLAYER':
      return Object.assign({}, state, {
        player: action.path === '/game' ? 'player1' : 'player2',
        xo: action.path === '/game' ? 'x' : 'o',
      });
    case 'SECOND_PLAYER_DISCONNECTED':
      return Object.assign({}, state, {
        secondPlayerDiconnected: true,
      });
    case 'SET_STATE':
      return Object.assign({}, state, {
        currentPlayer: state.currentPlayer === 'player1' ? 'player2' : 'player1',
      });
    case 'NEW_ROUND':
      let newScorePlayer1 = state.player1Score + 1;
      let newScorePlayer2 = state.player2Score + 1;
      return Object.assign({}, state, {
        player1Score: state.currentPlayer === 'player2' ? newScorePlayer1 : state.player1Score,
        player2Score: state.currentPlayer === 'player1' ? newScorePlayer2 : state.player2Score,
      });
    default:
      return state;
  }
}

export default players;
