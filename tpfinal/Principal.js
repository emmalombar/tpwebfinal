class Principal {

  constructor() {
    this.juego = new Juego();
    this.fondo = [];
    this.carga();

    this.botonDerecha = new Boton (558, 280, 40, 40);
    this.botonIzquierda = new Boton (2, 280, 40, 40);

    this.botonVariableIzq = new Boton (50, 450, 200, 50);
    this.botonVariableDer = new Boton (350, 450, 200, 50);

    this.botonMenu = new Boton (200, 550, 200, 50);
    this.botonCentro = new Boton (200, 500, 200, 50);

    this.estado = "menu";
  }

  carga() {
    for ( let i = 0; i < 25; i++ ) {
      this.fondo.push( loadImage('data/fondo' +i+ '.png'));
    }
  }

  dibujar() {
    if ( this.estado === "menu" ) {
      background(255);
      image(this.fondo [0], 0, 0, 600, 600);
      this.botonVariableIzq.dibujar('Inicio');
      this.botonVariableDer.dibujar('Creditos');
      //
    } else if ( this.estado === "creditos" ) {
      image(this.fondo [19], 0, 0, 600, 600);
      this.botonMenu.dibujar("Volver al menu");
      //
    } else if ( this.estado === "uno" ) {
      image (this.fondo [1], 0, 0, 600, 600);
      this.botonDerecha.dibujar(">");
      //
    } else if ( this.estado === "dos" ) {
      image (this.fondo [2], 0, 0, 600, 600);
      text ("2", 200, 500);
      this.botonIzquierda.dibujar("<");
      this.botonVariableIzq.dibujar("Temo que no");
      this.botonVariableDer.dibujar('Si, por alla');
      //
    } else if (this.estado === "final1" ) {
      image (this.fondo [3], 0, 0, 600, 600);
      this.botonMenu.dibujar("Volver al menu");
      //
    } else if (this.estado === "tres" ) {
      image (this.fondo [4], 0, 0, 600, 600);
      this.botonDerecha.dibujar(">");
      this.botonIzquierda.dibujar("<");
      //
    } else if (this.estado === "cuatro" ) {
      image (this.fondo [5], 0, 0, 600, 600);
      this.botonIzquierda.dibujar("<");
      this.botonDerecha.dibujar(">");
      //
    } else if (this.estado === "cinco" ) {
      image (this.fondo [6], 0, 0, 600, 600);
      this.botonIzquierda.dibujar('<');
      this.botonDerecha.dibujar('>');
      //
    } else if (this.estado === "seis" ) {
      image (this.fondo [7], 0, 0, 600, 600);
      this.botonIzquierda.dibujar("<");
      this.botonVariableIzq.dibujar("Son hermosos");
      this.botonVariableDer.dibujar("Te arruinaste la piel");
      //
    } else if (this.estado === "final2" ) {
      image (this.fondo [18], 0, 0, 600, 600);
      //
      this.botonMenu.dibujar("Volver al menu");
    } else if (this.estado === "siete" ) {
      image (this.fondo [8], 0, 0, 600, 600);
      this.botonIzquierda.dibujar('<');
      this.botonDerecha.dibujar('>');
      //
    } else if (this.estado === "ocho" ) {
      image (this.fondo [9], 0, 0, 600, 600);
      this.botonIzquierda.dibujar("<");
      this.botonVariableIzq.dibujar("Estas loco");
      this.botonVariableDer.dibujar("¿Quien te tatuo?");
      //
    } else if (this.estado === "nueve" ) {
      image (this.fondo [10], 0, 0, 600, 600);
      this.botonIzquierda.dibujar('<');
      this.botonDerecha.dibujar('>');
      //
    } else if (this.estado === "diez" ) {
      image (this.fondo [11], 0, 0, 600, 600);
      this.botonIzquierda.dibujar('<');
      this.botonDerecha.dibujar('>');
      //
    } else if (this.estado === "once" ) {
      image (this.fondo [12], 0, 0, 600, 600);
      this.botonIzquierda.dibujar('<');
      this.botonDerecha.dibujar('>');
      //
    } else if (this.estado === "doce" ) {
      image (this.fondo [13], 0, 0, 600, 600);
      this.botonIzquierda.dibujar('<');
      this.botonDerecha.dibujar('>');
      //
    } else if (this.estado === "trece" ) {
      image (this.fondo [14], 0, 0, 600, 600);
      this.botonIzquierda.dibujar('<');
      this.botonDerecha.dibujar('>');
      //
    } else if (this.estado === "catorce" ) {
      image (this.fondo [15], 0, 0, 600, 600);
      this.botonIzquierda.dibujar('<');
      this.botonVariableIzq.dibujar("Sigues mirando");
      this.botonVariableDer.dibujar("Te vas a dormir");
      //
    } else if (this.estado === "final4" ) {
      image (this.fondo [16], 0, 0, 600, 600);
      this.botonIzquierda.dibujar('<');
      this.botonMenu.dibujar("Minijuego");

      //
    } else if (this.estado === "final3" ) {
      image (this.fondo [17], 0, 0, 600, 600);
      this.botonMenu.dibujar("Volver al menu");
      //
    } else if (this.estado === "tutorial") {
      image (this.fondo [21], 0, 0, 600, 600);
      this.botonCentro.dibujar('Iniciar');
      //
    } else if (this.estado === "juego") {
      if (this.juego.estado === "jugando") {
        background(255);
        this.juego.actualiza();
        this.juego.dibuja();
      } else if (this.juego.estado === "ganaste") {
        image (this.fondo [24], 0, 0, 600, 600);
        image (this.fondo [22], 0, 0, 600, 600);
        this.botonVariableIzq.dibujar("Volver al Menu");
        this.botonVariableDer.dibujar("Volver a jugar");
      } else if (this.juego.estado === "perdiste") {
        image (this.fondo [24], 0, 0, 600, 600);
        image (this.fondo [23], 0, 0, 600, 600);
        this.botonVariableIzq.dibujar("Volver al Menu");
        this.botonVariableDer.dibujar("Volver a jugar");
      }
    }
  }

  click() {
    if (this.estado === "menu") {
      if (this.botonVariableIzq.apretarBoton()) {
        this.estado = "uno";
      } else if (this.botonVariableDer.apretarBoton()) {
        this.estado = "creditos";
      }
    } else if (this.estado === "creditos") {
      if (this.botonMenu.apretarBoton()) {
        this.estado = "menu";
      }
    } else if (this.estado === "uno") {
      if (this.botonDerecha.apretarBoton()) {
        this.estado = "dos";
      }
    } else if (this.estado === "dos") {
      if (this.botonIzquierda.apretarBoton()) {
        this.estado = "uno";
      } else if (this.botonVariableIzq.apretarBoton()) {
        this.estado = "tres";
      } else if (this.botonVariableDer.apretarBoton()) {
        this.estado = "final1";
      }
    } else if (this.estado === "final1") {
      if (this.botonMenu.apretarBoton()) {
        this.estado = "menu";
      }
    } else if (this.estado === "tres") {
      if (this.botonIzquierda.apretarBoton()) {
        this.estado = "dos";
      } else if (this.botonDerecha.apretarBoton()) {
        this.estado = "cuatro";
      }
    } else if (this.estado === "cuatro") {
      if (this.botonIzquierda.apretarBoton()) {
        this.estado = "tres";
      } else if (this.botonDerecha.apretarBoton()) {
        this.estado = "cinco";
      }
    } else if (this.estado === "cinco") {
      if (this.botonIzquierda.apretarBoton()) {
        this.estado = "cuatro";
      } else if (this.botonDerecha.apretarBoton()) {
        this.estado = "seis";
      }
    } else if (this.estado === "seis") {
      if (this.botonIzquierda.apretarBoton()) {
        this.estado = "cinco";
      } else if (this.botonVariableIzq.apretarBoton()) {
        this.estado = "siete";
      } else if (this.botonVariableDer.apretarBoton()) {
        this.estado = "final2";
      }
    } else if (this.estado === "siete") {
      if (this.botonIzquierda.apretarBoton()) {
        this.estado = "seis";
      } else if (this.botonDerecha.apretarBoton()) {
        this.estado = "ocho";
      }
    } else if (this.estado === "ocho") {
      if (this.botonIzquierda.apretarBoton()) {
        this.estado = "siete";
      } else if (this.botonVariableIzq.apretarBoton()) {
        this.estado = "final2";
      } else if (this.botonVariableDer.apretarBoton()) {
        this.estado = "nueve";
      }
    } else if (this.estado === "final2") {
      if (this.botonMenu.apretarBoton()) {
        this.estado = "menu";
      }
    } else if (this.estado === "nueve") {
      if (this.botonIzquierda.apretarBoton()) {
        this.estado = "ocho";
      } else if (this.botonDerecha.apretarBoton()) {
        this.estado = "diez";
      }
    } else if (this.estado === "diez") {
      if (this.botonIzquierda.apretarBoton()) {
        this.estado = "nueve";
      } else if (this.botonDerecha.apretarBoton()) {
        this.estado = "once";
      }
    } else if (this.estado === "once") {
      if (this.botonIzquierda.apretarBoton()) {
        this.estado = "diez";
      } else if (this.botonDerecha.apretarBoton()) {
        this.estado = "doce";
      }
    } else if (this.estado === "doce") {
      if (this.botonIzquierda.apretarBoton()) {
        this.estado = "once";
      } else if (this.botonDerecha.apretarBoton()) {
        this.estado = "trece";
      }
    } else if (this.estado === "trece") {
      if (this.botonIzquierda.apretarBoton()) {
        this.estado = "doce";
      } else if (this.botonDerecha.apretarBoton()) {
        this.estado = "catorce";
      }
    } else if (this.estado === "catorce") {
      if (this.botonIzquierda.apretarBoton()) {
        this.estado = "trece";
      } else if (this.botonVariableIzq.apretarBoton()) {
        this.estado = "final4";
      } else if (this.botonVariableDer.apretarBoton()) {
        this.estado = "final3";
      }
    } else if (this.estado === "final3") {
      if (this.botonMenu.apretarBoton()) {
        this.estado = "menu";
      }
    } else if (this.estado === "final4") {
      if (this.botonMenu.apretarBoton()) {
        this.estado = "tutorial";
      }
    } else if (this.estado === "tutorial" && this.botonCentro.apretarBoton()) {
      this.estado = "juego";
      this.juego.estado = "jugando";
    } else if (this.juego.estado === "ganaste" || this.juego.estado === "perdiste") {
      if (this.botonVariableIzq.apretarBoton()) {
        this.estado = "menu";
        this.juego.reinicio();
      } else if (this.botonVariableDer.apretarBoton()) {
        this.estado = "tutorial";
        this.juego.reinicio();
      }
    }
  }

  teclas() { //SACA LA MANO DE AHI CARAJO, NO TOQUES
    this.juego.teclaPresionada();
  }
}
