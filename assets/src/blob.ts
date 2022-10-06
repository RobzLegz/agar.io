const docCanvas = document.getElementById('canvas');

const canvas: HTMLCanvasElement = docCanvas as HTMLCanvasElement;

const ctx = canvas.getContext('2d');

export interface Blob {
    pos: {
        x: number;
        y: number;
    }
}

const Blob = function(this: Blob, x: number, y: number, size: number) {
    if (ctx) {
        ctx.beginPath();
        ctx.arc(x, y, size, 0, 2 * Math.PI);
        ctx.fillStyle = "#ffffff"
        ctx.stroke();
        ctx.fill()
    }
}

export default Blob;
