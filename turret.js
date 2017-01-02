function Turret() {
  this.size = 50;
  this.pos = createVector(0,height-this.size);
  this.angle = 45;
  this.bullets = [];

  this.fire = function (velY) {
    var bullet = new Bullet(this.pos.x + floor(this.size/2), this.pos.y + floor(this.size/2), velY, this.angle);
    this.bullets.push(bullet);
  }

  this.clean = function () {
    for (var i = this.bullets.length - 1; i >= 0; i--) {
      var bullet = this.bullets[i];
      var del = false;
      del = del || bullet.pos.x > width;
      del = del || bullet.pos.x < 0;
      del = del || bullet.pos.y > height;
      if (del) {
        this.bullets.splice(i,1);
      }
    }
  }

  this.update = function () {
    for (var i = 0; i < this.bullets.length; i++) {
      var bullet = this.bullets[i];

      // for loop is too expensive here
      if (walls[0].hits(bullet)) {
        bullet.bounce(0);
      } else if (walls[1].hits(bullet)) {
        bullet.bounce(1);
      }

      bullet.update();
    }
  }

  this.show = function () {
    for (var i = 0; i < this.bullets.length; i++) {
      this.bullets[i].show();
    }

    //turret gun
    push();
    rectMode(CENTER);
    translate(this.pos.x+floor(this.size/2),this.pos.y+floor(this.size/2));
    rotate(radians(this.angle));
    rect(0,0,20,100);
    pop();

    //turret base
    push();
    noStroke();
    fill('grey');
    rect(this.pos.x,this.pos.y,this.size,this.size);
    pop();
  }
}
