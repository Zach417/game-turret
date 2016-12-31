var turret;
var gravity;
var target;

function setup() {
  createCanvas(500,500);

  turret = new Turret();
  createTarget();
  gravity = createVector(0, 0.1);
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
}

function createTarget() {
  target = new Target(random(floor(width/2),width),random(50,height));
}

function mousePressed() {
  turret.fire();
}

function mouseMoved() {
  var deltaX = 0 - mouseX;
  var deltaY = height - mouseY;
  var thetaRadians = atan2(-deltaX, deltaY);
  var thetaDegrees = degrees(thetaRadians);
  turret.angle = thetaDegrees;
}
