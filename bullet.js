function Bullet (x,y,velY,angleDegrees) {
  this.bounced = {
    wall: -1,
    timestamp: new Date(),
  };
  this.pos = createVector(x, y);
  this.acc = createVector(0, 0);
  this.vel = createVector(0, velY);
  this.vel.rotate(radians(angleDegrees));

  this.bounce = function (wall) {
    var currentTime = new Date();
    var length = (currentTime - this.bounced.timestamp);
    if (this.bounced.wall != wall || length > 200) {
      this.vel.x = -this.vel.x;
      this.bounced = {
        wall: wall,
        timestamp: new Date(),
      };
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
    this.applyGravity();
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.show = function () {
    point(this.pos.x, this.pos.y);
  }

  this.clone = function () {
    var that = this;
    var temp = function temporary() { return that.apply(this, arguments); };
      for(var key in this) {
        if (this.hasOwnProperty(key)) {
            temp[key] = this[key];
        }
    }
    return temp;
  }
}
