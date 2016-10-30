import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newMessageServer } from '../actions'
import Chat from '../components/Chat'

class ChatContainer extends Component {
  constructor(props) {
    super(props)
  }
  componentDidUpdate() {
    this.props.autoScroll();
  }
  render() {
    return (
        <Chat
        messages={this.props.messages}
        player={this.props.player}
        name={this.props.name}
        roomId={this.props.roomId}
        onMessageSend={this.props.onMessageSend}
        />
    ) 
  }
}

const getName = (currentPlayer, playersId) => {
  return currentPlayer === 'player1' ? playersId[0] : playersId[1]
}

const mapStateToProps = (state) => {
  return {
    messages: state.chat,
    name: getName(state.players.player, state.players.allPlayers),
    player: state.players.player,
    roomId: state.room,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMessageSend: (name, message, roomId) => {
      if(message != '') dispatch(newMessageServer(name, message, roomId));
    },
    autoScroll: () => {
      let elem = document.getElementsByClassName('messages__container')[0];
      elem.scrollTop = elem.scrollHeight;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)
