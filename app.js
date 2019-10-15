let p1;
let goal;
let ball;

function setup() {
  createCanvas(600, 600);
  p1 = new Player();
  goal1 = new Goal();
  goal2 = new Goal();
  ball = new Ball();
}

function draw() { 
  p1.movement();
  clear();
  background(220);
  p1.showPlayer();
  goal1.goal(240, 20, 120, 40);
  goal2.goal(240, 540, 120, 40);
  ball.ball(300, 300);
}

function Player() {
  this.x = 0;
  this.y = 0;

  this.showPlayer = function () {
    ellipse(this.x, this.y, 20, 20);
  }

  this.movement = function () {
    if (keyIsDown(65)) {
      // left
      this.x -= 2;

      // collision detection
      if (this.x === 12) {
        this.x += 2;
      }
    }
  
    if (keyIsDown(68)) {
      // right
      this.x += 2;
      
      // collision detection
      if (this.x === 586) {
        this.x -= 2;
      }
    }
  
    if (keyIsDown(87)) {
      // up
      this.y -= 2;
      
      // collision detection
      if (this.y === 14) {
        this.y += 2;
      }
    }
  
    if (keyIsDown(83)) {
      // down
      this.y += 2;
      
      // collision detection
      if (this.y === 586) {
        this.y -= 2;
      }
    }
  }
}

function Goal() {
    this.goal = function (x, y, w, h) {
        rect(x, y, w, h);
    }
}

function Ball() {
  this.ball = function (x, y) {
    ellipse(x, y, 20, 20);
  }
}