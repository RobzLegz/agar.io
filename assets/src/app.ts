import Blob from './blob';
import { drawGrid } from './grid';
import { genRandBetween } from './utils/genRandBetween';

const docCanvas = document.getElementById('canvas');

const canvas: HTMLCanvasElement = docCanvas as HTMLCanvasElement;

const ctx = canvas.getContext('2d');

const { innerHeight, innerWidth } = window;

const wWidth = innerWidth;
const wHeight = innerHeight;

let blobs: Blob[] = [];

window.addEventListener("resize", () => {
    setup();
})

const game = () => {
    setup();

    drawBlobs();

    const blob = new Blob(wWidth / 2, wHeight / 2, 50);
    blob.draw();

    blob.update(0);
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

    setInterval(() => {
        for (let i = 0; i < 20; i++) {
            const x = genRandBetween(0, canvas.width);
            const y = genRandBetween(0, canvas.height);
    
            const newBlob = new Blob(x, y, 6);
    
            blobs = [...blobs, newBlob];
        }
    }, 1000)
};

const drawBlobs = () => {
    for (let i = blobs.length - 1; i > 0; i--) {
        blobs[i].draw();
    }
};

export default game;
export {
    blobs,
    drawBlobs,
    wWidth,
    wHeight
}