class Boton {
  constructor(x, y, ancho, alto) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;

    textAlign(CENTER);
    textSize(25);
  }

  dibujar(texto) {
    this.texto = texto;

    fill(203, 142, 142);
    stroke (168, 104, 104);
    rect(this.x, this.y, this.ancho, this.alto);

    fill (255);
    text(this.texto, this.x+this.ancho/2, this.y+this.alto/2);
  }

  apretarBoton(x, y, ancho, alto) {
    return mouseX>this.x && mouseX<this.x+this.ancho && mouseY>this.y && mouseY<this.y+this.alto;
  }
}
