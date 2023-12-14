class HombreIlustrado {

  constructor(y) {
    this.posX = 205;
    this.posY = y;
    this.carga();
  }

  dibuja(y) {
    image(this.hl, this.posX, y)

      if (this.posX >= 395) {
      this.posX = 395;
    } else if (this.posX <= 15) {
      this.posX = 15;
    }
  }

  carga() {
    this.hl = loadImage ("data/personaje1.png");
  }

  mover(tecla, izquierda, derecha) {
    if (tecla == izquierda) {
      this.posX -= 95;
    } else if (tecla == derecha) {
      this.posX += 95;
    }
  }
}
