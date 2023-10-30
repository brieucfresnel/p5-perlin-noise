class Particle {
  constructor(
    pos = createVector(0, 0),
    vel = createVector(0, 0),
    acc = createVector(0, 0)
  ) {
    this.pos = pos;
    this.vel = vel;
    this.acc = acc;
    this.maxSpeed = 4;

    this.prevPos = this.pos.copy();
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  follow(vectors) {
    const x = floor(this.pos.x / cellSize);
    const y = floor(this.pos.y / cellSize);
    const index = x + y * cols;
    const force = vectors[index];
    this.applyForce(force);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  show() {
    strokeWeight(2);
    stroke(random(255), 1);
    // stroke(0, 1);
    noFill();
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrev();
  }

  updatePrev() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  edges() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    } else if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    } else if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    } else if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    }
  }
}
