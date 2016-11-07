import React, { PropTypes } from 'react';
import Message from './Message';


const Chat = ({ name, player, allPlayers, messages, roomId, onMessageSend, onTyping, player1Typing, player2Typing  }) => {
    let textInput = null;
		let isTypingElem = null;

    const playerTyping = name === allPlayers[0] ? allPlayers[1] : allPlayers[0];
    if(player === 'player1' && player2Typing) isTypingElem = `${playerTyping} is typing...`;
    if(player === 'player2' && player1Typing) isTypingElem = `${playerTyping} is typing...`;

    const allMessages = messages.map((elem, i) => {
			const selfName = player === elem.nameId ? 'self' : elem.name;
			return <Message key={i} self={selfName} message={elem.message} />;
    });

    return (
      <div className="chat__container">
        <div className="messages__container" ref={input => textInput = input}>
        	{allMessages}
        </div>
        <span className="isTyping">{isTypingElem}</span>
        <form
        	onSubmit={e => {
          e.preventDefault();
          onMessageSend(player, name, e.target.querySelector('input').value, roomId)
          e.target.querySelector('input').value = '';
        }}>
          <input id={'focus'}
					onChange={() => {
						onTyping(player, roomId);
					}}
						type="text" className="message__input"
					/>
          <button className="message__button">
             Send
          </button>
        </form>
      </div>
    );
};

Chat.propTypes = {
  name: PropTypes.string.isRequired,
  player: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.object),
  roomId: PropTypes.number.isRequired,
  onMessageSend: PropTypes.func.isRequired,
	onTyping: PropTypes.func.isRequired,
	player1Typing: PropTypes.bool.isRequired,
  player2Typing: PropTypes.bool.isRequired,
};

export default Chat;
