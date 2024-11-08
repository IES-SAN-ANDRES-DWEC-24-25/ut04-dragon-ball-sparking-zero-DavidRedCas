// Los Namekians pueden regenerar salud una vez durante la batalla.

// src/Namekian.js

const Luchador = require('./Luchador');

class Namekian extends Luchador{
  constructor(nombre, velocidad, ataque, defensa, salud = 100){
    super(nombre, velocidad, ataque, defensa, salud);
    this.regenerado=false;
  }

  /**
   * Regenera salud si aún no lo ha hecho en la batalla.
   */
  regenerarSalud() {
    if (this.regenerado==false && this.salud<50) {
      this.salud+=30;

      this.regenerado=true;
    }
  }
}

module.exports = Namekian;
