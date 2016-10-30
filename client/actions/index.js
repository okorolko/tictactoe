export const clickField = (id, val, currentPlayer, roomId) => {
  return {
    type:'server/CLICK_FIELD',
    id,
    val,
    currentPlayer,
    roomId
  }
}
export const setRoomServer = (path) => {
  return {
    type: 'server/SET_ROOM_SERVER',
    path
  }
}
export const newMessageServer = (name, message, roomId) => {
  return {
    type: 'server/NEW_MESSAGE',
    name,
    message,
    roomId
  }
}
export const newMessage = (name, message) => {
  return {
    type: 'NEW_MESSAGE',
    name,
    message
  }
}
export const setRoomClient = (path) => {
  return {
    type: 'SET_ROOM_CLIENT',
    path
  }
}
export const userConnected = (path) => {
  return {
    type: 'server/USER_CONNECTED',
    path
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
export const secondConnected = () => {
  return {
    type: 'SECOND_USER_CONNECTED'
  }
}
export const setPlayer = (path) => {
  return {
  type: 'SET_PLAYER',
  path
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
export const secondDisconnected = () => {
  return {
    type: 'SECOND_USER_DISCONNECTED',
  }
}

