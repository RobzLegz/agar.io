const docCanvas = document.getElementById('canvas');

const canvas: HTMLCanvasElement = docCanvas as HTMLCanvasElement;

const ctx = canvas.getContext('2d');

interface Blob {}

function blob({ x, y, size }: { x: number; y: number, size: number }) {
    if (ctx) {
        ctx.beginPath();
        ctx.arc(x, y, size, 0, 2 * Math.PI);
        ctx.fillStyle = "#ffffff"
        ctx.stroke();
        ctx.fill()
    }
}

export default blob;
