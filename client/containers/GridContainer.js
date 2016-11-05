import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { clickField, setPlayer, userConnected, newRound, setRoomServer, setRoomClient } from '../actions';
import Grid from '../components/Grid';

class GridContainer extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.setPlayer(window.location.pathname);
    if (window.location.pathname !== '/game') {
      const roomId = parseInt(window.location.pathname.slice(1), 10);
      this.props.setRoomClient(roomId);
      this.props.setRoomServer(roomId);
      this.props.userConnected(window.location.pathname);
    }
  }
  componentDidUpdate() {
    if (this.props.winner) {
      setTimeout(this.props.newRound, 5000);
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
        winElements={this.props.winElements}
        onElemClick={this.props.onElemClick}
        secondPlayerDiconnected={this.props.secondPlayerDiconnected}
        />
      </div>
    );
  }
}

GridContainer.propTypes = {
	grid: PropTypes.arrayOf(PropTypes.object),
	player: PropTypes.string,
	xo: PropTypes.string,
	currentPlayer: PropTypes.string.isRequired,
	roomId: PropTypes.number.isRequired,
	winner: PropTypes.string,
	winElements: PropTypes.arrayOf(PropTypes.string),
	onElemClick: PropTypes.func.isRequired,
	secondPlayerDiconnected: PropTypes.bool.isRequired,
	newRound: PropTypes.func.isRequired,
	setPlayer: PropTypes.func.isRequired,
	setRoomClient: PropTypes.func.isRequired,
	setRoomServer: PropTypes.func.isRequired,
	userConnected: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    grid: state.grid.grid,
    player: state.players.player,
    xo: state.players.xo,
    currentPlayer: state.players.currentPlayer,
    winner: state.grid.winner,
    winElements: state.grid.winElements, 
    roomId: state.room,
    secondPlayerDiconnected: state.players.secondPlayerDiconnected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onElemClick: (id, val, isEmpty, player, currentPlayer, winner, roomId) => {
      if (isEmpty && !winner && player === currentPlayer) {
        dispatch(clickField(id, val, currentPlayer, roomId));
      }
    },
    setRoomServer: (path) => {
      dispatch(setRoomServer(path));
    },
    setRoomClient: (path) => {
      dispatch(setRoomClient(path));
    },
    setPlayer: (path) => {
      dispatch(setPlayer(path));
    },
    newRound: () => {
      dispatch(newRound());
    },
    userConnected: (path) => {
      dispatch(userConnected(path));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GridContainer);
