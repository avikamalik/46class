var brushColor;


function setup() {
  createCanvas(600, 600);
  strokeWeight(4);
  background(255)
  brushColor = color(50);
}

function draw() {
  if (mouseIsPressed) {
    if (mouseX <= 50) {
      if (mouseY <= 50) {
        brushColor = color("red");
      } else if (mouseY <= 100) {
        brushColor = color("orange");
      } else if (mouseY <= 150) {
        brushColor = color("yellow");
      } else if (mouseY <= 200) {
        brushColor = color("green");
      } else if (mouseY <= 250) {
        brushColor = color("blue");
      } else if (mouseY <= 300) {
        brushColor = color("purple");
      } else if (mouseY <= 350) {
        brushColor = color("pink");
      }
    }
    stroke(brushColor)
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  //noStroke();
  //start coding for your color squares here!
  stroke(color(0));
  fill("red");
  rect(0, 0, 50, 50);
  fill("orange");
  rect(0, 50, 50, 50);
  fill("yellow");
  rect(0, 100, 50, 50);
  fill("green");
  rect(0, 150, 50, 50)
  fill("blue");
  rect(0, 200, 50, 50);
  fill("purple");
  rect(0, 250, 50, 50);
  fill("pink");
  rect(0, 300, 50, 50);

}