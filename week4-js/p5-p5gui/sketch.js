// based on the example in https://github.com/bitcraftlab/p5.gui

// gui params
var myAngle = 30;
var myColor = '#eeee00';

var gui;

function setup(){
  createCanvas(windowWidth,windowHeight);

  // create the GUI
  sliderRange(0,90,1);
  gui = createGui('p5.gui');
  gui.addGlobals('myColor', 'myAngle');

  // only call draw when the GUI is changed
  noLoop();
}

function draw() {
  background(0);
  fill(myColor);
  noStroke();
  angleMode(DEGREES);
  // draw pacman
  arc(width/2, height/2, 100,100, myAngle/2, 360-myAngle/2, PIE);
  fill(0);
  // add the eye
  ellipse(width/2+10, height/2-27, 15, 15);
}

// dynamically adjust the canvas to the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}