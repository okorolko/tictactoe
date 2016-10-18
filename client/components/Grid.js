import React from 'react'

const Winner = ({winner}) => {
  return (
    <div className='winner__container'>
      <h1 className='winner__header'>{winner}</h1>
    </div>
  )
}

const Field = ({onClick, val}) => {
    return (
      <div className='gridBlock' onClick={onClick}>
        {val}
      </div>
    )
}

const Grid = ({grid, onElemClick, player, currentPlayer, winner, xo}) => {
  if(winner) {
    return (
      <div>
      <Winner winner={winner}/>
      <div className='grid'>
        {grid.map( (elem, i) =>
          <Field
          key={elem.key}
          val={elem.val}
        onClick={() => onElemClick(elem.key, xo, elem.val === '', player, currentPlayer, winner)}/>)}
      </div>
      </div>
    )
  } else {
    return (
      <div className='grid'>
        {grid.map( (elem, i) =>
          <Field
          key={elem.key}
          val={elem.val}
          onClick={() => onElemClick(elem.key, xo, elem.val === '', player, currentPlayer, winner)}/>)}
      </div>
    )
  }

}


export default Grid
