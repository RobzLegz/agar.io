import blob from "./blob";

const docCanvas = document.getElementById('canvas');

const canvas: HTMLCanvasElement = docCanvas as HTMLCanvasElement;

const game = () => {
    const ctx = canvas.getContext('2d');

    const {innerHeight, innerWidth} = window

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    if(ctx){
        ctx.fillStyle = "#000000";

        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    blob({x: 100, y: 100, size: 100});
};

export default game;
