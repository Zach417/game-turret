function Turret() {
  this.size = 50;
  this.pos = createVector(0,height-this.size);
  this.angle = 45;
  this.bullets = [];

  this.fire = function () {
    var bullet = new Bullet(this.pos.x + floor(this.size/2), this.pos.y + floor(this.size/2), this.angle);
    this.bullets.push(bullet);
  }

  this.update = function () {
    for (var i = 0; i < this.bullets.length; i++) {
      this.bullets[i].applyForce(gravity);
      this.bullets[i].update();
    }
  }

  this.show = function () {
    fill(255);
    rect(this.pos.x,this.pos.y,this.size,this.size);

    push();
    rectMode(CENTER);
    translate(this.pos.x+20,this.pos.y+20);
    rotate(radians(this.angle));
    rect(0,0,20,100);
    pop();

    for (var i = 0; i < this.bullets.length; i++) {
      this.bullets[i].show();
    }
  }
}
