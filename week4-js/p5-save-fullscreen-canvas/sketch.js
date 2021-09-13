let c;

function setup(){
  c = createCanvas(windowWidth,windowHeight);
  pixelDensity(1); // adjust for 1:1 output on mac
}

function draw() {
  background(200);
  ellipse(width/2, height/2, 100, 100);
}

// dynamically adjust the canvas to the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// save canvas c when the "s" key is pressed
function keyTyped(){
  if(key === 's'){    
    saveCanvas(c, 'mySketch', 'png');
  }     
}