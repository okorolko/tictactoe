export const clickField = (id, val, currentPlayer, roomId) => {
  return {
    type: 'server/CLICK_FIELD',
    id,
    val,
    currentPlayer,
    roomId,
  };
};
export const setRoomServer = (path) => {
  return {
    type: 'server/SET_ROOM_SERVER',
    path,
  };
};
export const newMessageServer = (nameId, name, message, roomId) => {
  return {
    type: 'server/NEW_MESSAGE',
    nameId,
    name,
    message,
    roomId,
  };
};
export const newMessage = (nameId, name, message) => {
  return {
    type: 'NEW_MESSAGE',
    nameId,
    name,
    message,
  };
};
export const isTypingToServer = (player, roomId) => {
  return {
    type: 'server/IS_TYPING',
		player,
		roomId,
  };
};
export const isTyping = (player) => {
  return {
    type: 'IS_TYPING',
		player,
  };
};
export const stopTypingToServer = (roomId) => {
  return {
    type: 'server/STOP_TYPING',
		roomId,
  };
};
export const stopTyping = () => {
  return {
    type: 'STOP_TYPING',
  };
};
export const setRoomClient = (path) => {
  return {
    type: 'SET_ROOM_CLIENT',
    path,
  };
};
export const userConnected = (path) => {
  return {
    type: 'server/USER_CONNECTED',
    path,
  };
};
export const setState = (id, val, currentPlayer) => {
  return {
    type: 'SET_STATE',
    id,
    val,
    currentPlayer,
  };
};
export const secondConnected = () => {
  return {
    type: 'SECOND_USER_CONNECTED',
  };
};
export const setPlayer = (path) => {
  return {
		type: 'SET_PLAYER',
		path,
  };
};
export const newRound = () => {
  return {
    type: 'NEW_ROUND',
  };
};
export const secondDisconnected = () => {
  return {
    type: 'SECOND_PLAYER_DISCONNECTED',
  };
};
