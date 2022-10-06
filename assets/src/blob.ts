const docCanvas = document.getElementById('canvas');

const canvas: HTMLCanvasElement = docCanvas as HTMLCanvasElement;

const ctx = canvas.getContext('2d');

// export interface BlobInterface {
//     pos: {
//         x: number;
//         y: number;
//     };
//     size: number;
//     draw: () => void;
//     update: () => void;
// }

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

    update() {
        let mouseX = 0;
        let mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;

            mouseX = clientX;
            mouseY = clientY;

            ctx?.lineTo(mouseX, mouseY);

            // console.log(clientX, clientY);
        });

        const a = mouseX - this.x;
        const b = mouseY - this.y;
        const c = Math.floor(Math.sqrt(a * a + b * b));

        // const angleB = Math.acos((a*a + c*c - b*b) / (2*a*c))

        // const deg = Math.floor(Math.sin((a*a + c*c - b*b) / (2*a*c)) * 100)


        // const angleB = Math.acos(((c*c) + (a*a) - (b*b))/(2*c*a));
        const angleB = Math.acos(((5*5) + (3*3) - (4*4))/(2*5*3));



        // const def = Math.sin(0.86)
        console.log(angleB)
    }
}

export default Blob;
