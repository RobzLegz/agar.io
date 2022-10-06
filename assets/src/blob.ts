const docCanvas = document.getElementById('canvas');

const canvas: HTMLCanvasElement = docCanvas as HTMLCanvasElement;

const ctx = canvas.getContext('2d');

export interface BlobInterface {
    pos: {
        x: number;
        y: number;
    };
    size: number;
    draw: () => void;
}

class Blob {
    constructor(public x: number, public y: number, public r: number) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    draw() {
        if (ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            ctx.fillStyle = '#ffffff';
            ctx.stroke();
            ctx.fill();
        }
    }
}

export default Blob;
