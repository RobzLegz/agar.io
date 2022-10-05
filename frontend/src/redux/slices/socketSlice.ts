import { createSlice } from '@reduxjs/toolkit';
import { Channel, Socket } from 'phoenix';

export interface SocketInfo {
    socket: boolean;
    joined: boolean;
}

const initialState: SocketInfo = {
    socket: false,
    joined: false,
};

let mySocket: Socket | null = null;
let moveChan: Channel | null = null;
let eatChan: Channel | null = null;
let joinChan: Channel | null = null;

export const socketSlice = createSlice({
    name: 'socket',
    initialState,
    reducers: {
        setSocket: (state) => {
            mySocket = new Socket('ws://localhost:4000/socket', {});
            moveChan = mySocket.channel('move:lobby', {});
            eatChan = mySocket.channel('eat:lobby', {});
            joinChan = mySocket.channel('join:lobby', {});


            let jC = 0;

            moveChan
                .join()
                .receive('ok', (resp) => {
                    jC += 1;
                })
                .receive('error', (resp) => {
                    console.log('Unable to join', resp);
                });

            eatChan
                .join()
                .receive('ok', (resp) => {
                    jC += 1;
                })
                .receive('error', (resp) => {
                    console.log('Unable to join', resp);
                });
                console.log(moveChan)

            joinChan
                .join()
                .receive('ok', (resp) => {
                    jC += 1;
                })
                .receive('error', (resp) => {
                    console.log('Unable to join', resp);
                });

            console.log(jC);

            // if (jC < 3) {
            //     return state;
            // }

            state = {
                ...state,
                socket: true,
                joined: true
            };

            return state;
        },
    },
});

export const { setSocket } = socketSlice.actions;

export const selectSocket = (state: any) => state.socket;

export { moveChan, joinChan, eatChan, mySocket };

export default socketSlice.reducer;
