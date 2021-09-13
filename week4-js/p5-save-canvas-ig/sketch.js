let c;

function setup(){
  // set resolution to 1080x1080, and pixel density = 1
  c = createCanvas(1080,1080);
  pixelDensity(1);

  // alternatively, on a mac with high density screen, if you set resolution to half. 540x540, and pixel density = 2, to output a 1080x1080px image, pay special attention to how objects are scaled in the draw loop.
  //c = createCanvas(540,540);
  //pixelDensity(2);
}

function draw() {
  background(200);
  ellipse(width/2, height/2, 100, 100);
}

// save canvas c when the "s" key is pressed
function keyTyped(){
  if(key === 's'){    
    saveCanvas(c, 'mySketch', 'png');
  }     
}