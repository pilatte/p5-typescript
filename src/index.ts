import p5 from "p5";

const sketch = (p: p5) => {
    p.setup = () => {
        p.createCanvas(400, 400);
    };

    p.draw = () => {
        p.background(255, 0, 0);
    };
};

const containerElement = document.getElementById("p5-container");
const p5Object = new p5(sketch, containerElement);
export { p5Object as p };
