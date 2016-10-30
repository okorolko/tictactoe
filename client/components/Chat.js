import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Message = ({name, message}) => {
  return (
    <div className='message__container'>
      <span className='name'>{name}: </span>
      <span className='message'>{message}</span>
    </div>
  )
}


const Chat = ({name, allPlayers, messages, roomId, onMessageSend}) => {
    let textInput = null;
    return (
      <div className='chat__container'>
      {/*<button className='chat-collapse__button' onClick={e => {
        e.preventDefault();  
      }}>x</button>*/}
        <div className='messages__container'
        ref={(input) => textInput = input}>
          {messages.map( (elem, i) =>
            <Message
            key={i}
            name={elem.name}
            message={elem.message}
            />)}
        </div>
        <form
        onSubmit={e => {
          e.preventDefault()
          onMessageSend(name ,e.target.querySelector('input').value, roomId)
          e.target.querySelector('input').value = '';
        }}>
            <input type="text" className='message__input'/>
           <button className='message__button'>
             Send
           </button>
        </form>
      </div>
    )
  }



export default Chat
