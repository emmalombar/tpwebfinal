class Juego {

  constructor () {
    this.perY = 278;
    this.perX = 205;
    this.hiY = 50;

    this.jugador = new Jugador(this.perX, this.perY);
    this.hi = new HombreIlustrado(this.hiY);

    this.piedra = [];
    for ( let i = 0; i < 5; i++ ) {
      this.piedra.push(new Piedra(15 + i*95, random(600, 900)));
    }

    this.cuenta = 0;

    this.fondo = [];
    this.carga();

    this.fondoy = 0;
    this.estado = "jugando";
  }

  actualiza() {
    if ( this.estado === "jugando" ) {
      this.cuenta += 0.3;
      if (this.cuenta >= 440) {
        this.cuenta = 440;
      }
      if (this.cuenta >= 440) {
        this.hiY -= 2;
      }
      if (this.fondoy < -1000) {
        this.fondoy = 0;
      }
      this.fondoy -= 3;
      for (let i = 0; i < 5; i++) {
        this.piedra[i].actualiza();
        this.piedra[i].tropiezo(this.jugador);
      }
    }
  }

  dibuja() {

    if ( this.estado === "jugando" ) {

      image(this.fondo [0], 0, this.fondoy);

      for (let i = 0; i < 5; i++) {
        this.piedra[i].dibuja();
      }
      this.hi.dibuja(this.hiY);
      this.jugador.dibuja();

      fill (255);
      rect (15, 15, 440, 10);

      fill (0, 255, 0);
      rect (15, 15, this.cuenta, 10);

      if (this.hiY <= -100) {
        this.estado = "ganaste";
      }
      if (this.jugador.posY<=80) {
        this.estado= "perdiste";
      }
    }
  }

  carga() {
    for ( let i = 0; i < 1; i++ ) {
      this.fondo.push( loadImage('data/juego' +i+ '.png'));
    }
  }

  teclaPresionada() {
    if (this.estado === "jugando") {
      this.jugador.mover(keyCode, LEFT_ARROW, RIGHT_ARROW);
      this.hi.mover(keyCode, LEFT_ARROW, RIGHT_ARROW);
    }
  }

  reinicio() {
    this.perY = 278;
    this.hiY = 50;
    this.cuenta = 0;

    this.jugador = new Jugador(this.perX, this.perY);
    this.hi = new HombreIlustrado(this.hiY);
    this.piedra = [];
    for (let i = 0; i < 5; i++) {
      this.piedra.push(new Piedra(15 + i * 95, random(600, 900)));
    }
  }
}
