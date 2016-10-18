import io from 'socket.io-client'
import store from '../configureStore'

const socket = io();

export const clickField = (id, val, currentPlayer) => {
  socket.emit('user_clicked', {
    type: 'CLICK_FIELD',
    id,
    val,
    currentPlayer,
  })
  return {
    type: 'CLICK_FIELD',
    id,
    val,
    currentPlayer,
  }
}
export const setState = (id, val, currentPlayer) => {
  return {
    type: 'SET_STATE',
    id,
    val,
    currentPlayer,
  }
}
export const generateLink = (link) => {
  return {
    type: 'GENERATE_LINK',
    link
  }
}
export const secondConnected = () => {
  return {
    type: 'SECOND_USER_CONNECTED'
  }
}
export const setPlayer = (route) => {
  return {
  type: 'SET_PLAYER',
  route
  }
}
export const setGridSize = (gridSize) => {
  return {
  type: 'SET_GRID_SIZE',
  gridSize
  }
}
export const newRound = () => {
  return {
    type: 'NEW_ROUND',
  }
}
export const setRoom = (roomId) => {
  return {
    type: 'SET_ROOM',
    roomId
  }
}
export default clickField
