let p1;
let goal;

function setup() {
  createCanvas(600, 600);
  p1 = new Player();
  goal1 = new Goal();
  goal2 = new Goal();
}

function draw() { 
  if (keyIsDown(65)) {
    p1.x -= 2;
  }

  if (keyIsDown(68)) {
    p1.x += 2;
  }

  if (keyIsDown(87)) {
    p1.y -= 2;
  }

  if (keyIsDown(83)) {
    p1.y += 2;
  }

  clear();
  background(220);
  ellipse(p1.x, p1.y, 20, 20);
  goal1.goal(240, 20, 120, 40);
  goal2.goal(240, 540, 120, 40);
}


function Player() {
  this.x = 0;
  this.y = 0;
}

function Goal() {
    this.goal = function (x, y, w, h) {
        rect(x, y, w, h);
    }
}
