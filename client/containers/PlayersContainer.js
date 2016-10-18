import { connect } from 'react-redux'
import Players from '../components/Players'

const getPlayers = (players, filter) => {
  switch (filter) {
    case 'SHOW_PLAYERS':
      return players
  }
}

const mapStateToProps = (state) => {
  return {
    players: getPlayers(state.players.allPlayers, 'SHOW_PLAYERS'),
    currentPlayer: state.players.currentPlayer,
    player1Score: state.players.player1Score,
    player2Score: state.players.player2Score
  }
}

const PlayersContainer = connect(
  mapStateToProps
)(Players)

export default PlayersContainer
