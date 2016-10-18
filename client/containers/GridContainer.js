import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clickField } from '../actions'
import { setPlayer} from '../actions'
import { newRound} from '../actions'
import Grid from '../components/Grid'
import checkWinner from '../gameLogic/checkWinner'

class GridContainer extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.setPlayer(window.location.pathname)
  }
  componentDidUpdate() {
    if(this.props.winner) {
      let x = setTimeout(this.props.newRound, 2000)
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
        winner={this.props.winner}
        onElemClick={this.props.onElemClick}
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
    winner: state.grid.winner
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onElemClick: (id, val, isEmpty, player, currentPlayer, winner) => {
      if(isEmpty && !winner && player === currentPlayer) dispatch(clickField(id, val, currentPlayer))
    },
    setPlayer: (route) => {
        dispatch(setPlayer(route))
    },
    newRound: () => {
        dispatch(newRound())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GridContainer)
