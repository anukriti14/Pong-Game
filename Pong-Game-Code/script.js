//Use the mouse to move the paddle from left to right. Keep the ball in the air. If it touches the ground, you lose.

/* VARIABLES */
let paddle, ball, ball2;
let score = 0;

/* PRELOAD LOADS FILES */
function preload() {

}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400,400);
  background(224,224,224);

  //Create paddle 
  paddle = new Sprite(200,380,100,20);
  paddle.color = color(95,158,160);
  paddle.rotationLock = true;

  
  //Create ball
  ball = new Sprite(100, 50, 20);
  ball.color = color(0,128,128);
  ball.direction = 'down';
  ball.speed = 5;
  ball.bounciness = 1;
  ball.friction = 0;

    
  //Create ball2
  ball2 = new Sprite(100, 50, 20);
  ball2.color = color("purple");
  ball2.direction = 'down';
  ball2.speed = 5;
  ball2.bounciness = 1;
  ball2.friction = 0;

  
  //Create walls
  walls = new Group();
	walls.w = 10;
	walls.h = 400;
  walls.collider = "static";
  walls.visible = false;

  // left and right walls
	new walls.Sprite(0, height / 2);
	new walls.Sprite(width, height / 2);
  
  //top wall
	let wallTop = new walls.Sprite(width / 2, 0);
	wallTop.rotation = 90;
}

/* DRAW LOOP REPEATS */
function draw() {
  background(224,224,224);

  //Move the paddle
paddle.moveTowards(mouse.x, 380, 1);
  
  //When ball collides with paddle bounce off and increase score
  if (ball.collides(paddle)) {
    ball.speed = 8;
    ball.direction = ball.direction + random (-10, 10);
    score = score + 1;
  }

  //When ball2 collides with paddle bounce off and increase score
  if (ball2.collides(paddle)) {
    ball2.speed = 8;
    ball2.direction = ball2.direction + random (-10, 10);
    score = score + 1;
  }
  
  //When ball hits ground you lose
  if (ball.y > 390) {
    ball.y = 430
    ball.speed = 0;
    
    // Draw you lose to screen
    fill(0);
    textSize(20);
    text('You lose!', 160, 160); 
  }

  //When ball2 hits ground you lose
  if (ball2.y > 390) {
    ball2.y = 430
    ball2.speed = 0;
    
    // Draw you lose to screen
    fill(0);
    textSize(20);
    text('You lose!', 160, 160); 
  }
  
  //Draw the score
  fill(0, 128, 128);
  textAlign(LEFT);
  textSize(20);
  text('Score = ' + score, 10, 30);
}	