const docCanvas = document.getElementById('canvas');

const canvas: HTMLCanvasElement = docCanvas as HTMLCanvasElement;

const ctx = canvas.getContext('2d');

const drawGrid = () => {
    if(!ctx){
        return;
    }

    for (let y = 0; y < canvas.height; y += 15) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        // ctx.fillStyle = "#ffffff";
        // ctx.lineTo(canvas.width, y);
        ctx.fillRect(0, y, canvas.width, 1);
        ctx.stroke();
        // ctx.fill()

        
    }

    // for(let x = 0; x < canvas.width; x += 15){
    //     ctx.moveTo(0, 0);
    //     ctx.beginPath();
    //     ctx.fillStyle = "#333030";
    //     ctx.lineTo(canvas.width, x);
    //     ctx.stroke();
    //     ctx.fill()
    // }

    
};

export { drawGrid };
