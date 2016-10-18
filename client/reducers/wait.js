export const generateLink = (state = {link: '', secondUserConnected: false}, action) => {
  switch (action.type) {
    case 'GENERATE_LINK':
    return Object.assign({}, state, {
      link: action.link
    })
    case 'SECOND_USER_CONNECTED':
    return Object.assign({}, state, {
      secondUserConnected: true
    })
    default:
      return state
  }
}

export default generateLink
