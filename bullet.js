function Bullet (x,y,velY,angleDegrees) {
  this.bounced = false;
  this.pos = createVector(x, y);
  this.acc = createVector(0, 0);
  this.vel = createVector(0, velY);
  this.vel.angle = radians(angleDegrees);
  this.vel.rotate(radians(angleDegrees));

  this.bounce = function () {
    if (!this.bounced) {
      this.vel.x = -this.vel.x;
      this.bounced = true;
    }
  }

  this.applyForce = function (force) {
    this.acc.add(force);
  }

  this.applyGravity = function () {
    var gravity = (height + this.pos.y) / height * .50;
    var force = createVector(0,gravity);
    this.acc.add(force);
  }

  this.update = function () {
    //this.vel.mult(0.93);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.show = function () {
    point(this.pos.x, this.pos.y);
  }
}
