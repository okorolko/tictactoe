import React, { PropTypes } from 'react';


const Message = ({ self, message }) => {
  const isSelf = self === 'self';
	const outerStyle = {
    justifyContent: isSelf ? 'flex-start' : 'flex-end',
	};
  const innerStyle = {
    background: isSelf ? '#fcf2ca' : '#d9e8ff',
    textAlign: isSelf ? 'left' : 'right',
  };
  return (
    <div style={outerStyle} className="message__outerContainer">
      <div style={innerStyle} className="message__innerContainer">
        <span className="message">{message}</span>
      </div>
    </div>
  );
};

Message.propTypes = {
	self: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
};

export default Message;
