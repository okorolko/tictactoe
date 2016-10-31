import Grid from '../gameLogic/grid';
import checkWinner from '../gameLogic/checkWinner'


export const grid = (state = {currentPlayer: 'player1'}, action) => {
  switch (action.type) {
    case 'SET_STATE':
     let initialGrid = state.grid
     let currentGrid = initialGrid.map(function(elem, index, array) {
         if(elem.id.key === action.data.id.key) {
           elem.val = action.data.val
         };
         return elem
       })
    let winner = checkWinner(action.data.id, currentGrid, action.data.val)
      return Object.assign({}, state, {
        lastMove: action.data.id,
        winner: winner.win ?
        action.data.currentPlayer.slice(0, 1).toUpperCase() +
        action.data.currentPlayer.slice(1, 6) + ' ' +
        action.data.currentPlayer.slice(6, 8) + ' wins!'
        : '',
        winElements: winner.winElements,
        currentVal: action.val,
        grid: state.grid.map(function(elem, index, array) {
            if(elem.id.key === action.data.id.key) {
              elem.val = action.data.val
            };
            return elem
          })
      })
    case 'NEW_ROUND':
      const newGrid = new Grid(19).createGrid();
      return Object.assign({}, state, newGrid)
    default:
      return state
  }
}


export default grid
