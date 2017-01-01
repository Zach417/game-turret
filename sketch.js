var turret;
var gravity;
var target;
var wall;

function setup() {
  createCanvas(500,500);

  turret = new Turret();
  wall = new Wall(floor(width/2) - 20, floor(height/2), 40, floor(height/2));
  gravity = createVector(0, 0.1);

  createTarget();
}

function draw() {
  background(0);
  strokeWeight(8);
  stroke(255);

  for (var i = this.turret.bullets.length-1; i >= 0; i--) {
    var bullet = this.turret.bullets[i];
    if (target.hit(bullet.pos.x, bullet.pos.y)) {
      createTarget();
      break;
    }
  }

  turret.update();
  turret.show();
  target.show();
  wall.show();
}

function createTarget() {
  target = new Target(random(floor(width/2),width),random(50,height));
}

function mousePressed() {
  var maxC = 400;
  var maxV = -35;

  var x1 = 0;
  var x2 = mouseX;
  var y1 = -height;
  var y2 = mouseY;
  var a = x2 - x1;
  var b = -y1 - y2;
  var c = sqrt(a*a + b*b);

  if (c > maxC) {
    c = maxC;
  }

  turret.fire((c/maxC)*maxV);
}

function mouseMoved() {
  var deltaX = 0 - mouseX;
  var deltaY = height - mouseY;
  var thetaRadians = atan2(-deltaX, deltaY);
  var thetaDegrees = degrees(thetaRadians);
  turret.angle = thetaDegrees;
}
