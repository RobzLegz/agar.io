import { Channel, Socket } from 'phoenix';
import Blob from './blob';

let Join = {
    init(socket: Socket, blob: Blob) {
        let channel = socket.channel('game:lobby', {blob: blob});
        channel.join();
        this.listenForJoin(channel, blob);
    },
    listenForJoin(channel: Channel, blob: Blob) {
        channel.push('shout', { blob: blob });

        channel.on('shout', (payload) => {
            const { msg } = payload;
        });
    },
};

export default Join;
