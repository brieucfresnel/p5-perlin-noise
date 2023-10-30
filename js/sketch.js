const white = "#FFE8EC";
const black = "#30313A";

const cellSize = 20;
let cols, rows;

function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
  background(220);

  cols = width / cellSize;
  rows = height / cellSize;
}

let res = 0.03; // Noise resolution
let xoff = 0;

function draw() {
  let yoff = 0;

  for (let y = 0; y < rows; y++) {
    xoff = 0;

    for (let x = 0; x < cols; x++) {
      let n = noise(xoff, yoff);

      fill(black);
      stroke(white);

      rect(x * cellSize, y * cellSize, cellSize, cellSize);

      xoff += res;
    }

    yoff += res;
  }

  noLoop();
}
