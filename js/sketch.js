const white = "#FFE8EC";
const black = "#30313A";

const cellSize = 20;
let cols, rows;

function setup() {
  createCanvas(600, 600);
  pixelDensity(1);

  cols = width / cellSize;
  rows = height / cellSize;
}

let res = 0.05; // Noise resolution
let xoff = 0;

function draw() {
  let yoff = 0;
  background(white);

  for (let y = 0; y < rows; y++) {
    xoff = 0;

    for (let x = 0; x < cols; x++) {
      let angle = noise(xoff, yoff) * TWO_PI;

      let v = p5.Vector.fromAngle(angle);
      xoff += res;

      stroke(black);
      push();

      translate(x * cellSize, y * cellSize);
      rotate(v.heading());
      line(0, 1, 0, cellSize);

      pop();

      xoff += res;
    }

    yoff += res;
  }
}
