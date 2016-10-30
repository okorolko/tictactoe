
export const chat = (state = [], action) => {
  switch (action.type) {
    case 'NEW_MESSAGE':
      let newArray = state.slice(0);
      newArray.push({name: action.name, message: action.message})
      return newArray
    default:
      return state
  }
}


export default chat
