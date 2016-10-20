import Grid from '../gameLogic/grid';
import checkWinner from '../gameLogic/checkWinner'


export const grid = (state = {currentPlayer: 'player1'}, action) => {
  switch (action.type) {
    case 'CLICK_FIELD':
      return Object.assign({}, state, {
        lastMove: action.id,
        winner: '',
        currentVal: action.val,
        grid: state.grid.map(function(elem, index, array) {
            if(elem.id.key === action.id.key) {
              elem.val = action.val
            };
            return elem
          })
      })
    case 'SET_STATE':
    let initialGrid = state.grid
    let currentGrid = initialGrid.map(function(elem, index, array) {
        if(elem.id.key === action.id.key) {
          elem.val = action.val
        };
        return elem
      })
    let winner = checkWinner(action.id, currentGrid, action.val)
      return Object.assign({}, state, {
        lastMove: action.id,
        winner: winner ?
        action.currentPlayer.slice(0, 1).toUpperCase() +
        action.currentPlayer.slice(1, 6) + ' ' +
        action.currentPlayer.slice(6, 8) + ' wins!'
        : '',
        currentVal: action.val,
        grid: state.grid.map(function(elem, index, array) {
            if(elem.key === action.id) {
              elem.val = action.val
            };
            return elem
          })
      })
    case 'NEW_ROUND':
      const newGrid = new Grid(25).createGrid();
      return Object.assign({}, state, newGrid)
    default:
      return state
  }
}


export default grid
