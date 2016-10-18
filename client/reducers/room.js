export const room = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ROOM':
      return Object.assign({}, state, {
        roomId: action.roomId
      })
    default:
      return state
  }
}

export default room
