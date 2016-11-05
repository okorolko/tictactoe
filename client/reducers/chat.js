const initialState = {
	messages: [],
	typing: {
		player: '',
		isTyping: false,
	},
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
      return Object.assign({}, state, {
				typing: {
					player: action.player,
					isTyping: true,
				},
			});
		case 'STOP_TYPING':
			return Object.assign({}, state, {
				typing: {
					player: '',
					isTyping: false,
				},
			});
    default:
      return state;
  }
};


export default chat;
