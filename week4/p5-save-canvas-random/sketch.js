let c;

let xrand;
let yrand;

function setup(){
  c = createCanvas(400,400);
  pixelDensity(1); // adjust for 1:1 output on mac
  
  // generate initial position for ellipse
  xrand = random(100, width-100);
  yrand = random(100, width-100);
}

function draw() {
  background(200);  
  ellipse(xrand, yrand, 100, 100);
}

// save canvas c when the "s" key is pressed
// results in a png file with 3 digit random number added to the file name
function keyTyped(){
  if(key === 's'){    
    var r = round(random(100,999),0);
    var f = "mySketch-";
    saveCanvas(c ,f+r, 'png');
  }
  
  // when "r" key is pressed, generate random x and y coordinates for ellipse
  if(key === 'r'){
    xrand = random(100, width-100);
    yrand = random(100, width-100);
  }    
}