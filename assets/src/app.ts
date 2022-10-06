import Blob from './blob';

const docCanvas = document.getElementById('canvas');

const canvas: HTMLCanvasElement = docCanvas as HTMLCanvasElement;

const game = () => {
    const ctx = canvas.getContext('2d');

    const { innerHeight, innerWidth } = window;

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    if (ctx) {
        ctx.fillStyle = '#000000';

        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    const blob = new Blob(100, 100, 100);
    blob.draw();
};

export default game;
