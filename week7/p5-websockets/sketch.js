var socket;

function setup() {
  createCanvas(600, 600);
  background(0);
  cursor(CROSS);
  socket = io.connect('http://localhost:3000');
  
  socket.on('mouse',
    function(data) {
      console.log("Got: " + data.x + " " + data.y);
      // Draw blue circle
      fill(0,0,255);
      noStroke();
      ellipse(data.x, data.y, 20, 20);
  });
}

function draw() {
  // Nothing
}

function mouseDragged() {
  
  fill(255,0,0);
  noStroke();
  ellipse(mouseX, mouseY, 20, 20);
  
  sendmouse(mouseX, mouseY);
}

function sendmouse(xpos, ypos) {
  console.log("sendmouse: " + xpos + " " + ypos);
  
  // make object with mouseX and mouseY
  var data = {
    x: mouseX,
    y: mouseY
  };
  
  // send object to the socket
  socket.emit('mouse', data);
}


