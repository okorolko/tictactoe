const initialState = { 
	secondUserConnected: false,
};

export const generateLink = (state = initialState, action) => {
  switch (action.type) {
    case 'SECOND_USER_CONNECTED':
			return Object.assign({}, state, {
				secondUserConnected: true,
			})
    default:
      return state
  }
}

export default generateLink;
