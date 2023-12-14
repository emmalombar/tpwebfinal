//Emma Lombar 94709/8
//Sapag Nayla 93541/6
//Comisión 1

let ne;
function setup() {
  createCanvas (600, 600);
  ne = new Principal();
}

function draw() {
  ne.dibujar();
}

function mousePressed() {
  ne.click();
}

function keyPressed() {
  ne.teclas();
}
