import React, { PropTypes } from 'react';

const Disconnect = (props) => {
  if (props.disconnected) {
    return (
      <div className="disconnect__container">
      <span className="disconnect">Second Player disconnected</span>
      </div>
    )
  } else {
    return null;
  }
};

Disconnect.propTypes = {
  disconnected: PropTypes.bool,
};

export default Disconnect;
