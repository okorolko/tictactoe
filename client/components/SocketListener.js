import { setState } from '../actions'
import { secondConnected } from '../actions'
import io from 'socket.io-client'
const socket = io();

export default function(store) {
    socket.on('SET_STATE', (data) => {
        store.dispatch(setState(data.id, data.val, data.currentPlayer))
    });
    socket.on('SECOND_USER_CONNECTED', (data) => {
        store.dispatch(secondConnected())
    });
}
