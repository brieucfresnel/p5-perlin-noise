const white = "#FFE8EC";
const black = "#30313A";

const cellSize = 20;
let cols, rows;
const particles = [];
const particleSpeed = 1;

let zoff = 0;
let noiseIncrease = 0.05;
let timeIncrease = 0.005;

function setup() {
  createCanvas(600, 600);
  pixelDensity(1);

  cols = width / cellSize;
  rows = height / cellSize;

  for (let i = 0; i < 100; i++) {
    particles.push(
      new Particle(
        createVector(random(width), random(height)),
        p5.Vector.random2D()
      )
    );
  }

  console.log(particles[0]);
}

function draw() {
  let yoff = 0;
  background(white);

  for (let y = 0; y < rows; y++) {
    let xoff = 0;

    for (let x = 0; x < cols; x++) {
      let angle = noise(xoff, yoff, zoff) * TWO_PI;

      let v = p5.Vector.fromAngle(angle);
      stroke(black);
      push();

      // translate(x * cellSize, y * cellSize);
      // rotate(v.heading());
      // line(0, 1, 0, cellSize);

      pop();

      xoff += noiseIncrease;
    }

    yoff += noiseIncrease;
  }

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
    particles[i].edges();
  }

  zoff += timeIncrease;
}
