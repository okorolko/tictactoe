import {rootReducer} from './reducers';
import Grid from './gameLogic/grid';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const newGrid = new Grid(25).createGrid();

const persistedState = {
    players: {
      allPlayers: ['Player 1', 'Player 2'],
      currentPlayer: 'player1',
      player1Score: 0,
      player2Score: 0
    },
    grid: newGrid
}

const configureStore = () => {
  const store = createStore(rootReducer, persistedState, applyMiddleware(thunk))
  return store
}

export default configureStore
