import Grid from '../store/grid';
import checkWinner from '../gameLogic/checkWinner'

const initialState = {
  currentPlayer: 'player1'
}

export const grid = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STATE':
      let winner = checkWin(state, action);
      return Object.assign({}, state, {
        lastMove: action.data.id,
        winner: winner.win ?
        action.data.currentPlayer.slice(0, 1).toUpperCase() +
        action.data.currentPlayer.slice(1, 6) + ' ' +
        action.data.currentPlayer.slice(6, 8) + ' wins!'
        : '',
        winElements: winner.winElements,
        currentVal: action.val,
        grid: state.grid.map( (elem, index, array) => {
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

function checkWin(state, action) {
     let previousStateGrid = state.grid;
     let currentStateGrid = previousStateGrid.map( elem => {
         if(elem.id.key === action.data.id.key) elem.val = action.data.val;
         return elem
       })
    return checkWinner(action.data.id, currentStateGrid, action.data.val)
}

export default grid
