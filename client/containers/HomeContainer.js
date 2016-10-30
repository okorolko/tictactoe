import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clickField } from '../actions'
import { setPlayer } from '../actions'
import { setRoomServer } from '../actions'
import Home from '../components/Home'

class HomeContainer extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.setRoomServer(this.props.roomId)
  }
  componentDidMount() {
    this.props.setPlayer(window.location.pathname)
  }
  render() {
    return (
      <div>
        <Home
        grid={this.props.grid}
        player={this.props.player}
        currentPlayer={this.props.currentPlayer}
        winner={this.props.winner}
        onElemClick={this.props.onElemClick}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    player: state.players.player,
    roomId: state.room
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onElemClick: (e) => {
      dispatch(setGridSize(e.target.value))
    },
    setPlayer: (route) => {
        dispatch(setPlayer(route))
    },
    setRoomServer: (path) => {
      dispatch(setRoomServer(path))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
