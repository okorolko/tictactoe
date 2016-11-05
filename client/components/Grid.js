import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Disconnect from './Disconnect';
import Winner from './Winner';
import Field from './Field';


const Grid = ({ grid, onElemClick, xo, player, currentPlayer, winner, winElements, roomId, secondPlayerDiconnected }) => {
		return (
       <div className='grid__container'>
          <ReactCSSTransitionGroup
            transitionName="grid"
            transitionAppear={true}
            transitionAppearTimeout={2000}
            transitionEnterTimeout={2000}
            transitionLeaveTimeout={2000}> 
              <Winner winner={winner} />
              <Disconnect disconnected={secondPlayerDiconnected} />
              <div className='grid'>
                {grid.map( (elem) =>
                  <Field
                  key={elem.id.key}
                  val={elem.val}
                  id={elem.id.key}
                  winElements={winElements}
                  onClick={() => onElemClick(elem.id, xo, elem.val === '', player, currentPlayer, winner, roomId)}  
                />)}
              </div>
         </ReactCSSTransitionGroup>
        </div>
		)
};

Grid.propTypes = {
  grid: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  xo: PropTypes.string,
  player: PropTypes.string,
  currentPlayer: PropTypes.string.isRequired,
  winner: PropTypes.string,
  winElements: PropTypes.arrayOf(PropTypes.string),
  roomId: PropTypes.number.isRequired,
  secondPlayerDiconnected: PropTypes.bool,
  onElemClick: PropTypes.func.isRequired,
};

export default Grid;

