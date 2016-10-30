import { connect } from 'react-redux'
import Players from '../components/Players'


const mapStateToProps = (state) => {
  return {
    players: state.players.allPlayers,
    currentPlayer: state.players.currentPlayer,
    player1Score: state.players.player1Score,
    player2Score: state.players.player2Score
  }
}

const PlayersContainer = connect(
  mapStateToProps
)(Players)

export default PlayersContainer
