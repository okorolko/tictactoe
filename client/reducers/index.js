import { combineReducers } from 'redux'
import players from './players'
import grid from './grid'
import wait from './wait'
import room from './room'




export const rootReducer = combineReducers({
  players,
  grid,
  wait,
  room
})

export default rootReducer
