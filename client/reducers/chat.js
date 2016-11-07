const initialState = {
	messages: [],
	typing: {
		player1: false,
		player2: false,
	},
	player1Typing: false,
	player2Typing: false,
};

export const chat = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_MESSAGE':
      return Object.assign({}, state, {
				messages: state.messages.concat({
					nameId: action.nameId,
					name: action.name,
					message: action.message,
				}),
			});
		case 'IS_TYPING':
		console.log();
      return Object.assign({}, state, {
				messages: state.messages,
				[`${action.player}Typing`]: true
			});
		case 'STOP_TYPING':
			return Object.assign({}, state, {
				messages: state.messages,
				[`${action.player}Typing`]: false
			});
    default:
      return state;
  }
};


export default chat;
