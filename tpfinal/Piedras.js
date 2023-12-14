class Piedra {
  
  constructor(x, y) {
    this.posX = x;
    this.posY = y;
    this.ancho = 60;
    this.alto = 48;
    this.r = [600, 800, 1000];
    this.piedra = loadImage("data/piedra0.png");
  }

  actualiza() {
    if (this.posY <= -50) {
      this.posY = random(this.r);
    }
    this.posY -= 2;
  }

  dibuja() {
    image(this.piedra, this.posX, this.posY, this.ancho, this.alto);
  }

  tropiezo(jugador) {
    if (jugador.posX + jugador.ancho > this.posX && jugador.posX < this.posX + this.ancho && jugador.posY + jugador.alto > this.posY && jugador.posY < this.posY + this.alto) {
      jugador.posY -= 50;
    }
  }
}
