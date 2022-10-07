import { blobs, drawBlobs } from './app';

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
        this.speed = 1;
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
        setInterval(() => {
            const a = mouseX - this.x;
            const b = mouseY - this.y;
            const c = Math.floor(Math.sqrt(a * a + b * b));

            const rotation = Math.atan2(mouseY - this.y, mouseX - this.x);

            this.x += this.speed * Math.cos(rotation);
            this.y += this.speed * Math.sin(rotation);

            if (ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = '#000000';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                drawBlobs();
            }

            this.draw();
        }, 1000 / 60);
    }

    // update(timestamp: number) {
    //     const delta = timestamp - this.lastTime;
    //     this.lastTime = timestamp;

    //     if (this.timer > this.interval) {
    //         const a = mouseX - this.x;
    //         const b = mouseY - this.y;
    //         const c = Math.floor(Math.sqrt(a * a + b * b));

    //         const rad = 180 / Math.PI;

    //         const angle = Math.asin(a / c) * rad;

    //         this.x += this.speed * Math.cos(angle);
    //         this.y += this.speed * Math.sin(angle);

    //         if (ctx) {
    //             ctx.clearRect(0, 0, canvas.width, canvas.height);
    //             ctx.fillStyle = '#000000';
    //             ctx.fillRect(0, 0, canvas.width, canvas.height);
    //             drawBlobs();
    //         }

    //         this.draw();

    //         this.timer = 0;
    //     } else {
    //         this.timer += delta;
    //     }

    //     moveAnim = requestAnimationFrame(this.update.bind(this));
    // }
}

export default Blob;
