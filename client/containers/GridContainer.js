import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clickField } from '../actions'
import { setPlayer} from '../actions'
import { userConnected } from '../actions'
import { newRound } from '../actions'
import { setRoomServer } from '../actions'
import { setRoomClient } from '../actions'
import Grid from '../components/Grid'

class GridContainer extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.setPlayer(window.location.pathname)
    if(window.location.pathname != '/game') {
      let roomId = parseInt(window.location.pathname.slice(1), 10)
      this.props.setRoomClient(roomId)
      this.props.setRoomServer(roomId)
      this.props.userConnected(window.location.pathname)
    }
  }
  componentDidUpdate() {
    if(this.props.winner) {
      setTimeout(this.props.newRound, 5000)
    }
  }
  render() {
    return (
      <div>
        <Grid
        grid={this.props.grid}
        player={this.props.player}
        xo={this.props.xo}
        currentPlayer={this.props.currentPlayer}
        roomId={this.props.roomId}
        winner={this.props.winner}
        onElemClick={this.props.onElemClick}
        secondUserConnected={this.props.secondUserConnected}
        />
      </div>
    )
  }
}
const getGridElems = (gridElems, filter) => {
  switch (filter) {
    case 'SHOW_GRID_ELEMS':
      return gridElems
  }
}
const mapStateToProps = (state) => {
  return {
    grid: getGridElems(state.grid.grid, 'SHOW_GRID_ELEMS'),
    player: state.players.player,
    xo: state.players.xo,
    currentPlayer: state.players.currentPlayer,
    winner: state.grid.winner,
    roomId: state.room,
    secondUserConnected: state.players.secondUserConnected
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onElemClick: (id, val, isEmpty, player, currentPlayer, winner, roomId) => {
     if(isEmpty && !winner && player === currentPlayer) {
       dispatch(clickField(id, val, currentPlayer, roomId))
     } 
    },
    setRoomServer: (path) => {
      dispatch(setRoomServer(path))
    },
    setRoomClient: (path) => {
      dispatch(setRoomClient(path))
    },
    setPlayer: (path) => {
        dispatch(setPlayer(path))
    },
    newRound: () => {
        dispatch(newRound())
    },
    userConnected: (path) => {
      dispatch(userConnected(path))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GridContainer)
