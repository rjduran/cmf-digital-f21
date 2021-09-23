function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(200);
  ellipse(width/2, height/2, 100, 100);
}

// dynamically adjust the canvas to the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}