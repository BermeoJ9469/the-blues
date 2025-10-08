var jeff=0;

//The setup function only happens once
function setup() {
	createCanvas(1000, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(255, jeff, 255); //an RGB color for the canvas' background
  //circle
  fill(255, 211, 0,255); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,225,150); // center of canvas, 20px dia

}

function mousePressed(){

  if (jeff>=440) {
    jeff=0;
  } else {
    jeff= jeff+10;
  }}
