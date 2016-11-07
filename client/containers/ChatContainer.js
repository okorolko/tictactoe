import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { newMessageServer, isTypingToServer, stopTypingToServer } from '../actions';
import Chat from '../components/Chat';

class ChatContainer extends Component {
  constructor(props) {
    super(props);
		this.onTyping = this.onTyping.bind(this);
		this.stopTypingToServer = this.props.stopTypingToServer.bind(this);
  }
	onTyping(player, roomId) {
			clearTimeout(this.timeout);
			this.timeout = setTimeout(() => {this.stopTypingToServer(player, roomId)}, 1000);
      this.props.dispatchTypingToServer(player, roomId);
  }
  componentDidUpdate() {
    this.props.autoScroll();
  }
  render() {
    return (
        <Chat
					messages={this.props.messages}
					player={this.props.player}
					allPlayers={this.props.allPlayers}
					name={this.props.name}
					roomId={this.props.roomId}
					onMessageSend={this.props.onMessageSend}
					onTyping={this.onTyping}
          player1Typing={this.props.player1Typing}
          player2Typing={this.props.player2Typing}
        />
    );
  }
}

ChatContainer.propTypes = {
	messages: PropTypes.arrayOf(PropTypes.object),
	player: PropTypes.string,
	allPlayers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
	name: PropTypes.string,
	roomId: PropTypes.number,
	onMessageSend: PropTypes.func.isRequired,
	dispatchTypingToServer: PropTypes.func.isRequired,
	autoScroll: PropTypes.func.isRequired,
  player1Typing: PropTypes.bool.isRequired,
  player2Typing: PropTypes.bool.isRequired,
};

const getName = (currentPlayer, playersId) => {
  return currentPlayer === 'player1' ? playersId[0] : playersId[1];
};

const mapStateToProps = (state) => {
  return {
    messages: state.chat.messages,
    name: getName(state.players.player, state.players.allPlayers),
    player: state.players.player,
		allPlayers: state.players.allPlayers,
    roomId: state.room,
    player1Typing: state.chat.player1Typing,
    player2Typing: state.chat.player2Typing
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMessageSend: (nameId, name, message, roomId) => {
      if (message !== '') dispatch(newMessageServer(nameId, name, message, roomId));
    },
		dispatchTypingToServer: (player, roomId) => {
      dispatch(isTypingToServer(player, roomId));
    },
		stopTypingToServer: (player, roomId) => {
			 dispatch(stopTypingToServer(player, roomId));
		},
    autoScroll: () => {
      const elem = document.getElementsByClassName('messages__container')[0];
      elem.scrollTop = elem.scrollHeight;
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
