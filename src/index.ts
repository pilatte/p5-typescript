import * as p5 from "p5";
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

///////////////////////////////
// Add the sketch to the DOM //
///////////////////////////////
const div = document.createElement("div");
div.id = "p5-container";
document.body.appendChild(div);
const p5Object = new p5(sketch, div);
export { p5Object as p };
// This is needed on some browsers
// to fill the screen completely
document.body.style.margin = "0";
document.body.style.padding = "0";
///////////////////////////////
