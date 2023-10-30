// const white = "#FFE8EC";
// const black = "#30313A";

function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
  background(220);
}

let res = 0.01; // Noise resolution
let xoff = 0;
let yoff = 0;

function draw() {
  loadPixels();

  for (let y = 0; y < height; y++) {
    xoff = 0;

    for (let x = 0; x < width; x++) {
      const pxIndex = (x + y * width) * 4;

      let noiseVal = noise(xoff, yoff);

      let r = noiseVal * 255;

      pixels[pxIndex] = r;
      pixels[pxIndex + 1] = r;
      pixels[pxIndex + 2] = r;
      pixels[pxIndex + 3] = r;

      xoff += res;
    }

    yoff += res;
  }

  updatePixels();
  noLoop();
}
