export const room = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ROOM_CLIENT':
      return action.path;
    default:
      return state;
  }
};

export default room;
