import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Winner = ({winner}) => {
  return (
    <div className='winner__wrap'>
      <ReactCSSTransitionGroup
       transitionName="winner"
       transitionAppear={true}
       transitionAppearTimeout={5000}
       transitionEnterTimeout={5000}
       transitionLeaveTimeout={5000}>
        <div className='winner__container'>
          <h1 className='winner__header'>{winner}</h1>
        </div>
      </ReactCSSTransitionGroup> 

    </div>
  )
}

const Field = ({id, onClick, val, winElements}) => {

    let test = _.find(winElements, (elem) => {
           return  elem === id
      })
    let background = test ? {'background': 'gray'} : {'background': 'inherit'}


    let fieldClass;
    val === 'x' ? fieldClass='gridBlock blue-x' : fieldClass='gridBlock red-o'
    return (
      <div className={fieldClass} style={background} onClick={onClick}>
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

const Grid = ({grid, onElemClick, xo, player, currentPlayer, winner, winElements,roomId, secondUserConnected}) => {
  if(winner) {
    return (
      <div>
 
        <Winner winner={winner}/>
        <div className='grid'>
          {grid.map( (elem, i) =>
            <Field
            key={elem.id.key}
            val={elem.val}
            id={elem.id.key}
            winElements={winElements}
            onClick={() => onElemClick(elem.id, xo, elem.val === '', player, currentPlayer, winner, roomId)}  
          />)}
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
