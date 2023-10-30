const white = "#FFE8EC";
const black = "#30313A";

const cellSize = 30;
let cols, rows;
const particles = [];
const particleSpeed = 1;

let flowField;

let zoff = 0;
let magnitude = 1;
let timeIncrease = 0.01;
let noiseIncrease = 0.4;

function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
  background(white);

  cols = width / cellSize;
  rows = height / cellSize;
  flowField = new Array(cols * rows);

  for (let i = 0; i < 1000; i++) {
    particles.push(new Particle(createVector(random(width), random(height))));
  }
}

function draw() {
  let yoff = 0;

  for (let y = 0; y < rows; y++) {
    let xoff = 0;

    for (let x = 0; x < cols; x++) {
      const index = x + y * cols;
      let angle = noise(xoff, yoff, zoff) * TWO_PI;

      let v = p5.Vector.fromAngle(angle);
      v.setMag(magnitude);
      flowField[index] = v;

      // stroke(black);
      // push();
      // translate(x * cellSize, y * cellSize);
      // rotate(v.heading());
      // stroke(0, 30);
      // line(0, 1, 0, cellSize);
      // pop();

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
