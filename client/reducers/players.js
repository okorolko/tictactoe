export const players = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PLAYER':
      return Object.assign({}, state, {
        player: action.path === '/game' ? 'player1' : 'player2',
        xo: action.path === '/game' ? 'x' : 'o'
      })
    case 'SECOND_USER_DISCONNECTED':
      return Object.assign({}, state, {
        secondUserConnected: false
      })
    case 'SET_STATE':
      return Object.assign({}, state, {
        currentPlayer: state.currentPlayer === 'player1' ? 'player2' : 'player1',
      })
    case 'NEW_ROUND':
      let currentScore1 = state.player1Score;
      let currentScore2 = state.player2Score;
      let newScore1 = currentScore1 + 1;
      let newScore2 = currentScore2 + 1;
      return Object.assign({}, state, {
        player1Score: state.currentPlayer === 'player2' ? newScore1 : currentScore1,
        player2Score: state.currentPlayer === 'player1' ? newScore2 : currentScore2,
        // player1Score: action.winner && state.currentPlayer === 'player1' ? state.player1Score + 1 : state.player1Score,
        // player2Score: action.winner && state.currentPlayer === 'player2' ? state.player2Score + 1 : state.player2Score,
      })
    default:
      return state
  }
}

export default players
