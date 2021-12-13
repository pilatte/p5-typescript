import { circleSize, p } from "./index";

export function drawCircle() {
    p.fill(p.frameCount % 360, 100, 100);
    p.circle(p.mouseX, p.mouseY, circleSize);
}
