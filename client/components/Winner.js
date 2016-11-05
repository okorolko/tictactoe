import React, {PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Winner = ({ winner }) => {
  if (winner) {
    return (
      <div className="winner__wrap">
        <ReactCSSTransitionGroup
        transitionName="winner"
        transitionAppear={true}
        transitionAppearTimeout={5000}
        transitionEnterTimeout={5000}
        transitionLeaveTimeout={5000}>
          <div className="winner__container">
            <h1 className="winner__header">{winner}</h1>
          </div>
        </ReactCSSTransitionGroup> 
      </div>
    );
  } else {
    return null
  }
};

Winner.propTypes = {
  winner: PropTypes.string.isRequired,
};

export default Winner;
