import Blob from './blob';
import { drawGrid } from './grid';
import { genRandBetween } from './utils/genRandBetween';
import socket from '../js/user_socket';

const docCanvas = document.getElementById('canvas');

const canvas: HTMLCanvasElement = docCanvas as HTMLCanvasElement;

const ctx = canvas.getContext('2d');

const { innerHeight, innerWidth } = window;

const wWidth = innerWidth;
const wHeight = innerHeight;
const P = 300;

let blobs: Blob[] = [];
let players: Blob[] = [];

window.addEventListener('resize', () => {
    setup();
});

const game = () => {
    setup();

    const player = new Blob(
        genRandBetween(P, canvas.width - P),
        genRandBetween(P, canvas.height - P),
        25
    );
    player.draw();

    player.update(0);

    let channel = socket.channel('game:lobby', {});
    channel
        .join()
        .receive('ok', (resp) => {
            console.log('Joined successfully', resp);
        })
        .receive('error', (resp) => {
            console.log('Unable to join', resp);
        });

    channel.push('join', { blob: player });
    channel.on('join', (payload) => {
        const newBlob: Blob = payload.blob;
    });

    incBlobs();
};

const setup = () => {
    const w = 5000;
    const h = 5000;

    canvas.width = w;
    canvas.height = h;
    if (ctx) {
        ctx.fillStyle = '#000000';

        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // drawGrid();
    }
};

const incBlobs = () => {
    setInterval(() => {
        for (let i = 0; i < 20; i++) {
            const x = genRandBetween(P, canvas.width - P);
            const y = genRandBetween(P, canvas.height - P);

            const newBlob = new Blob(x, y, 10);

            blobs = [...blobs, newBlob];
        }
    }, 4000);
};

const drawBlobs = (blob: Blob) => {
    for (let i = blobs.length - 1; i > 0; i--) {
        const nBlob = blobs[i];

        nBlob.draw();

        if (blob.eats(nBlob)) {
            blobs.splice(i, 1);
        }
    }
};

export default game;
export { blobs, drawBlobs, wWidth, wHeight, P, players };
