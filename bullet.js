function Bullet (x,y,degrees) {
  this.pos = createVector(x, y);
  this.acc = createVector(0, 0);
  this.vel = createVector(0, -50);
  this.vel.rotate(radians(degrees));

  this.applyForce = function (force) {
    this.acc.add(force);
  }

  this.update = function () {
    this.vel.mult(0.93);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.show = function () {
    point(this.pos.x, this.pos.y);
  }
}
