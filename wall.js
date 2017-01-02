function Wall (x,y,width,length) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.length = length;

  this.hits = function (bullet) {
    var bullet2 = bullet.clone();
    bullet2.pos = createVector(bullet.pos.x, bullet.pos.y);
    bullet2.vel = createVector(bullet.vel.x, bullet.vel.y);
    bullet2.acc = createVector(bullet.acc.x, bullet.acc.y);
    bullet2.update();

    //wall.x between b1.x && b2.x;
    var hitsX = bullet.pos.x < this.x && bullet2.pos.x > this.x;
    //wall.x + wall.width between b1.x && b2.x;
    hitsX = hitsX || (bullet.pos.x < this.x + this.width && bullet2.pos.x > this.x + this.width);
    //b1.x between wall.x + wall.width
    hitsX = hitsX || (this.x < bullet.pos.x && this.x + this.width > bullet.pos.x);
    //wall between y1 && y2
    var hitsY = bullet.pos.y > this.y && bullet2.pos.y < this.y;
    //b1 within wall height
    hitsY = hitsY || (this.y < bullet.pos.y && this.y - this.length < bullet.pos.y);
    return hitsX && hitsY;
  }

  this.contains = function (x, y) {
    var x1 = this.x;
    var x2 = this.x + this.width;
    var y1 = this.y;
    var y2 = this.y + this.length;
    return x >= x1 && x <= x2 && y >= y1 && y <= y2;
  }

  this.show = function () {
    push();
    fill('grey');
    noStroke();
    rect(this.x, this.y, this.width, this.length);
    pop();
  }
}
