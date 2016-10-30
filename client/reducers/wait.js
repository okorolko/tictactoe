export const generateLink = (state = {secondUserConnected: false}, action) => {
  switch (action.type) {
    case 'SECOND_USER_CONNECTED':
    return Object.assign({}, state, {
      secondUserConnected: true
    })
    default:
      return state
  }
}

export default generateLink
