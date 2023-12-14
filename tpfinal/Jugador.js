class Jugador {

  constructor(x, y) {
    this.posX = x;
    this.posY = y;
    this.ancho = 60;
    this.alto = 98;
    this.tipito = loadImage("data/personaje0.png");
  }

  actualiza() {
    if (principal.estado == "jugando" && principal.cuenta >= 440) {
      this.posY +=2;
    }
  }

  dibuja() {
    image(this.tipito, this.posX, this.posY, this.ancho, this.alto);
  }

  mover(tecla, izquierda, derecha) {
    if (tecla === izquierda && this.posX > 15) {
      this.posX -= 95;
    } else if (tecla === derecha && this.posX < 395) {
      this.posX += 95;
    }
  }
}
