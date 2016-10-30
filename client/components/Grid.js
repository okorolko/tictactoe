import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Winner = ({winner}) => {
  return (
    <div className='winner__container'>
      <h1 className='winner__header'>{winner}</h1>
    </div>
  )
}

const Field = ({onClick, val}) => {
    let fieldClass;
    val === 'x' ? fieldClass='gridBlock blue-x' : fieldClass='gridBlock red-o'
    return (
      <div className={fieldClass} onClick={onClick}>
        {val}
      </div>
    )
}

const Disconnect = ({connected}) => {
  if(!connected) {
    return (
      <div className='disconnect__container'>
      <span className='disconnect'>Second Player disconnected :(</span>
      </div>
    )
  } else {
    return <div></div>
  }
}

const Grid = ({grid, onElemClick, xo, player, currentPlayer, winner, roomId, secondUserConnected}) => {
  if(winner) {
    return (
      <div>
      <Winner winner={winner}/>
      <div className='grid'>
        {grid.map( (elem, i) =>
          <Field
          key={elem.id.key}
          val={elem.val}
        onClick={() => onElemClick(elem.id, xo, elem.val === '', player, currentPlayer, winner, roomId)}/>)}
      </div>
      </div>
    )
  } else {
    return (
      <div>
      <ReactCSSTransitionGroup
       transitionName="grid"
       transitionAppear={true}
       transitionAppearTimeout={2000}
       transitionEnterTimeout={2000}
       transitionLeaveTimeout={2000}>
      <Disconnect connected={secondUserConnected}/>
      <div className='grid'>
        {grid.map( (elem, i) =>
          <Field
          key={elem.id.key}
          val={elem.val}
          onClick={() => onElemClick(elem.id, xo, elem.val === '', player, currentPlayer, winner, roomId)}/>)}
      </div>
      </ReactCSSTransitionGroup>
      </div>
    )
  }
}


export default Grid
