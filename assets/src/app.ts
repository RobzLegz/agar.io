import Blob from './blob';
import { drawGrid } from './grid';
import { genRandBetween } from './utils/genRandBetween';

const docCanvas = document.getElementById('canvas');

const canvas: HTMLCanvasElement = docCanvas as HTMLCanvasElement;

const ctx = canvas.getContext('2d');

const { innerHeight, innerWidth } = window;

const wWidth = innerWidth;
const wHeight = innerHeight;
const P = 300;

let blobs: Blob[] = [];

window.addEventListener('resize', () => {
    setup();
});

const game = () => {
    setup();

    const blob = new Blob(wWidth / 2, wHeight / 2, 50);
    blob.draw();

    blob.update(0);

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

            const newBlob = new Blob(x, y, 6);

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
            console.log(blobs)
        } 
    }
};

export default game;
export { blobs, drawBlobs, wWidth, wHeight, P };
