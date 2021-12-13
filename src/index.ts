import p5 from "p5";
import { drawCircle } from "./circle";

export let circleSize = 10;

const sketch = (p: p5) => {
    p.setup = () => {
        p.createCanvas(400, 400);
        p.background(100, 0, 0);
        p.colorMode(p.HSB, 360, 100, 100, 100);
        p.noStroke();
    };

    p.draw = () => {
        if (p.mouseIsPressed) {
            drawCircle();
            circleSize += 1;
        }
    };
    p.mouseReleased = () => {
        circleSize = 20;
    };
    p.keyPressed = () => {
        if (p.key === "s") {
            p.saveCanvas("myCanvas", "png");
        }
    };
};

const containerElement = document.getElementById("p5-container");
const p5Object = new p5(sketch, containerElement);
export { p5Object as p };
