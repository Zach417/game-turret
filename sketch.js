var turret;
var gravity;
var target;
var walls = [];

function setup() {
  createCanvas(800,600);

  turret = new Turret();
  walls.push(new Wall(floor(width/2) - 20, floor(height/2), 40, floor(height/2)));
  walls.push(new Wall(width - 40, 0, 40, height));
  gravity = createVector(0, 0.1);

  createTarget();
}

function draw() {
  background(0);
  strokeWeight(8);
  stroke(255);

  drawTurretPower();

  for (var i = this.turret.bullets.length-1; i >= 0; i--) {
    var bullet = this.turret.bullets[i];
    if (target.hit(bullet.pos.x, bullet.pos.y)) {
      createTarget();
      break;
    }
  }

  turret.clean();
  turret.update();
  target.update();
  turret.show();
  target.show();

  for (var i = 0; i < walls.length; i++) {
    walls[i].show();
  }
}

function createTarget() {
  target = new Target(random(floor(width/2)+20,width-20),random(50,height));
  for (var i = 0; i < walls.length; i++) {
    if (walls[i].contains(target.x, target.y)) {
      createTarget();
      break;
    }
  }
}

function mousePressed() {
  var maxV = -35;
  var power = getTurretPower();
  turret.fire(power*maxV);
}

function drawTurretPower() {
  var power = getTurretPower();
  push()
  fill('red');
  noStroke();
  rect(0,0,width*power,10);
  pop();
}

function getTurretPower() {
  var maxC = 400;

  var x1 = turret.pos.x;
  var x2 = mouseX;
  var y1 = -turret.pos.y;
  var y2 = mouseY;
  var a = x2 - x1;
  var b = -y1 - y2;
  var c = sqrt(a*a + b*b);

  if (c > maxC) {
    c = maxC;
  }

  return c/maxC;
}

function mouseMoved() {
  var deltaX = turret.pos.x - mouseX;
  var deltaY = turret.pos.y - mouseY;
  var thetaRadians = atan2(-deltaX, deltaY);
  var thetaDegrees = degrees(thetaRadians);
  turret.angle = thetaDegrees;
}
