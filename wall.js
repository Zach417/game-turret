function Wall (x,y,width,length) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.length = length;

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
