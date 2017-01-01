function Target(x,y) {
  this.x = x;
  this.y = y;
  this.marginOfError = 15;

  this.hit = function (x,y) {
    var hitX = this.x < x + this.marginOfError && this.x > x - this.marginOfError;
    var hitY = this.y < y + this.marginOfError && this.y > y - this.marginOfError;
    return hitX && hitY;
  }

  this.show = function () {
    push();
    stroke('yellow');
    strokeWeight(25);
    point(x,y);
    pop();
  }
}
