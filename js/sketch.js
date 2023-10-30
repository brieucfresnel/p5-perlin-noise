const white = "#FFE8EC";
const black = "#30313A";

const cellSize = 30;
let cols, rows;
const particles = [];
const particleSpeed = 1;

let flowField;

let zoff = 0;
let magnitude = 1;
let timeIncrease = 0.002;
let noiseIncrease = 1.1;
let noiseIncrSlider;

const width = 400,
  height = 400;

function setup() {
  createCanvas(width, height);
  pixelDensity(1);
  background(white);

  cols = Math.floor(width / cellSize);
  rows = Math.floor(height / cellSize);
  flowField = new Array(cols * rows);

  noiseIncrSlider = createSlider(0.1, 1, 2, 0.1);

  for (let i = 0; i < 1000; i++) {
    particles.push(new Particle(createVector(random(width), random(height))));
  }
}

function draw() {
  let yoff = 0;

  noiseIncrease = noiseIncrSlider.value();

  for (let y = 0; y < rows; y++) {
    let xoff = 0;

    for (let x = 0; x < cols; x++) {
      const index = x + y * cols;
      let angle = noise(xoff, yoff, zoff) * TWO_PI;

      let v = p5.Vector.fromAngle(angle);
      v.setMag(magnitude);
      flowField[index] = v;

      xoff += noiseIncrease;
    }

    yoff += noiseIncrease;
  }

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].edges();
    particles[i].show();
    particles[i].follow(flowField);
  }

  zoff += timeIncrease;
}
