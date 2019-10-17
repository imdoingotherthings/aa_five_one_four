// declare a variable outside of the loop that plays our game 
// this variable will be our soeed for the ball
// now we'll have collision detection that moves the ball
// so, if the ball gets touched by the player, the ball will now move in real
// time because now the speed is set globally


let p1;
let goal;
let ball;
let game;
let xspeed = 2.8; // Speed of the shape
let yspeed = 2.2;

let ballSpeed; // ball speed set globally but never defined 
var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 20;
var diameter = 20;


var xBallChange = 2;
var yBallChange = 2;

/* 
  * @type {Funtion}
  * @params {none}
  * @return {no return}
  * @desc - it initializes our game board i.e. our canvas
*/

function setup() {
  createCanvas(600, 600);
  p1 = new Player();
  goal1 = new Goal();
  goal2 = new Goal();
  ball = new Ball();
  game = new Game();
  ball.x = 300; 
  ball.y = 300; 

  p1.x = 100;
  p1.y = 500;
}

/* 
  * @type {Funtion}
  * @params {none}
  * @return {no return}
  * @desc - draw is our game loop. it makes everything run smoothly and updates every second
*/

function draw() { 
  p1.movement();
  clear();
  background(220);
  p1.showPlayer();
  // ball.ball();
  goal1.goal(240, 20, 120, 40);
  goal2.goal(240, 540, 120, 40);
  game.collision();
  // lets draw the ball here and update movement here
  ball.ball();
  ball.ballMovement();
  // x += xBallChange;
  // y += yBallChange;
  console.log(ball.x);
  // if (xBall < diameter/2 || xBall > windowWidth - 0.5*diameter) {
  //   xBall *= -1;
  // }
  // if (yBall < diameter/2 || yBall > windowHeight - diameter) {
  //   yBall *= -1;
  // }
}

/* 
  * @type {Class}
  * @params {none}
  * @return {no return}
  * @desc - creates our player class
  * @methods {player.showPlayer} {player.movement} 
*/

function Player() {
  this.x = 0;
  this.y = 0;

  this.showPlayer = function () {
    circle(this.x, this.y, 20);
  }

  this.movement = function () {
    if (keyIsDown(65)) {
      // left
      this.x -= 5;

      // collision detection
      if (this.x === 12) {
        this.x += 5;
      }
    }
  
    if (keyIsDown(68)) {
      // right
      this.x += 5;
      
      // collision detection
      if (this.x === 586) {
        this.x -= 5;
      }
    }
  
    if (keyIsDown(87)) {
      // up
      this.y -= 5;
      
      // collision detection
      if (this.y === 14) {
        this.y += 5;
      }
    }
  
    if (keyIsDown(83)) {
      // down
      this.y += 5;
      
      // collision detection
      if (this.y === 586) {
        this.y -= 5;
      }
    }
  }
}

/* 
  * @type {Class}
  * @params {none}
  * @return {no return}
  * @desc - creates our goal class
  * @methods {goal.goal} 
*/

function Goal() {
    this.goal = function (x, y, w, h) {
        rect(x, y, w, h);
    }
}

/* 
  * @type {Class}
  * @params {none}
  * @return {no return}
  * @desc - creates our ball class
  * @methods {ball.ball} 
*/

function Ball(x, y) {
  this.x = 0;
  this.y = 0;

  this.ball = function () {
    ellipse(this.x, this.y, diameter, diameter);
  }

  this.ballMovement = function () {
    this.x += xBallChange;
    this.y += yBallChange;
    if (this.y === 572) {
      this.y -= 4;
    }
    if (this.x === 580) {
      this.x -= 4;
    }
  }
}

/* 
  * @type {Class}
  * @params {none}
  * @return {no return}
  * @desc - creates our game class
  * @methods {game.game} 
*/

function Game() {
  this.collision = function () {
    let xPosition = p1.x - ball.x;
    let yPosition = p1.y - ball.y;  
    if (xPosition < 22 && xPosition > -22 && yPosition === 20) {
      ball.y -= 2;
      ball.x -= 2;
    } 
  }
}