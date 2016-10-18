import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clickField } from '../actions'
import { setPlayer } from '../actions'
import { setGridSize } from '../actions'
import {setRoom} from '../actions'

import Home from '../components/Home'
import {findDOMNode} from 'react-dom'

class HomeContainer extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.setRoom()
  }
  componentDidMount() {
    this.props.setPlayer(window.location.pathname)
    const username = findDOMNode(this.refs.selectBox);
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

const getGridElems = (gridElems, filter) => {
  switch (filter) {
    case 'SHOW_GRID_ELEMS':
      return gridElems
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    player: state.players.player,
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
    setRoom: () => {
      let roomId = Math.floor(Math.random() * (1000000 - 1)) + 1;
      dispatch(setRoom(roomId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
