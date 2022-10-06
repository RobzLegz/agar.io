const docCanvas = document.getElementById('canvas');

const canvas: HTMLCanvasElement = docCanvas as HTMLCanvasElement;

const ctx = canvas.getContext('2d');

class Blob {
    speed: number;

    constructor(public x: number, public y: number, public r: number) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.speed = 1;
    }

    draw() {
        if (ctx) {
            ctx.clearRect(this.x - this.r,
                this.y - this.r,
                this.r * 2,
                this.r * 2);
            
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
            ctx.fillStyle = '#ffffff';
            ctx.fill();
            ctx.stroke();
        }
    }

    update() {
        let mouseX = 0;
        let mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;

            mouseX = clientX;
            mouseY = clientY;
        });

        setInterval(() => {
            const a = mouseX - this.x;
            const b = mouseY - this.y;
            const c = Math.floor(Math.sqrt(a * a + b * b));

            const rad = 180 / Math.PI;

            const angle = Math.asin(a / c) * rad;

            this.x += this.speed * Math.cos(angle);
            this.y += this.speed * Math.sin(angle);

            this.draw();
        }, 1000 / 60);
    }
}

export default Blob;
