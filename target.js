function Target(x,y) {
  this.pos = createVector(x,y);
  this.vel = createVector(0,2);
  this.directionChange = new Date();
  this.marginOfError = 25;

  this.hit = function (x,y) {
    var hitX = this.pos.x < x + this.marginOfError && this.pos.x > x - this.marginOfError;
    var hitY = this.pos.y < y + this.marginOfError && this.pos.y > y - this.marginOfError;
    return hitX && hitY;
  }

  this.update = function () {
    var len = (new Date() - this.directionChange);
    if (len > 200) {
      if (this.pos.y > height) {
        this.vel = createVector(this.vel.x, -this.vel.y);
        this.directionChange = new Date();
      } else if (this.pos.y < 0) {
        this.vel = createVector(this.vel.x, -this.vel.y);
        this.directionChange = new Date();
      } else if (random(0,1) > 0.995) {
        this.vel = createVector(this.vel.x, -this.vel.y);
      }
    }

    this.pos.add(this.vel);
  }

  this.show = function () {
    push();
    stroke('yellow');
    strokeWeight(25);
    point(this.pos.x,this.pos.y);
    pop();
  }
}
