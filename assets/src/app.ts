import Blob from './blob';
import { genRandBetween } from './utils/genRandBetween';

const docCanvas = document.getElementById('canvas');

const canvas: HTMLCanvasElement = docCanvas as HTMLCanvasElement;

let blobs: Blob[] = [];

const game = () => {
    setup();

    draw();

    const blob = new Blob(canvas.width / 2, canvas.height / 2, 50);
    blob.draw();
    blob.update();
};

const setup = () => {
    const ctx = canvas.getContext('2d');

    const { innerHeight, innerWidth } = window;

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    if (ctx) {
        ctx.fillStyle = '#000000';

        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    for (let i = 0; i < 20; i++) {
        const x = genRandBetween(0, canvas.width);
        const y = genRandBetween(0, canvas.height);

        const newBlob = new Blob(x, y, 6);

        blobs = [...blobs, newBlob];
    }
};

const draw = () => {
    for (let i = blobs.length - 1; i > 0; i--) {
        blobs[i].draw();
    }
};

export default game;
