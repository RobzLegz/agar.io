import { blobs, drawBlobs, P, wHeight, wWidth } from './app';

const docCanvas = document.getElementById('canvas');

const canvas: HTMLCanvasElement = docCanvas as HTMLCanvasElement;

const ctx = canvas.getContext('2d');

let mouseX = 0;
let mouseY = 0;
let moveAnim: number | null = null;

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;

    mouseX = clientX;
    mouseY = clientY;
});

document.addEventListener('resize', () => {
    if (moveAnim) {
        cancelAnimationFrame(moveAnim);
    }
});

class Blob {
    speed: number;
    lastTime: number;
    interval: number;
    timer: number;

    constructor(public x: number, public y: number, public r: number) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.speed = 5;
        this.lastTime = 0;
        this.interval = 1;
        this.timer = 0;
    }

    draw() {
        if (ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
            ctx.fillStyle = '#000000';
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
            ctx.fillStyle = '#ffffff';
            ctx.fill();
            ctx.stroke();
        }
    }

    update(timestamp: number) {
        const delta = timestamp - this.lastTime;
        this.lastTime = timestamp;

        if (this.timer > this.interval) {
            const rotation = Math.atan2(
                mouseY - wHeight / 2,
                mouseX - wWidth / 2
            );

            const newX = this.x + this.speed * Math.cos(rotation);
            const newY = this.y + this.speed * Math.sin(rotation);

            if (newX > P && newX < canvas.width - P) {
                this.x = newX;
            }

            if (newY > P && newY < canvas.height - P) {
                this.y = newY;
            }

            if (ctx) {
                ctx.resetTransform();
                ctx.restore();
                ctx.translate(wWidth / 2 - this.x, wHeight / 2 - this.y);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = '#000000';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                drawBlobs(this);
            }

            this.draw();

            this.timer = 0;
        } else {
            this.timer += delta;
        }

        moveAnim = requestAnimationFrame(this.update.bind(this));
    }

    eats(blob: Blob) {
        let dX = this.x - blob.x;
        let dY = this.y - blob.y;

        if (dX < 0) {
            dX = -dX;
        }

        if (dY < 0) {
            dY = -dY;
        }

        if (dX < blob.r + this.r && dY < blob.r + this.r) {
            this.r += blob.r;
            return true;
        }else{
            return false;
        }
    }
}

export default Blob;
