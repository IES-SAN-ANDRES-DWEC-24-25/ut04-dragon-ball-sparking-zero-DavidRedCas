// Los Namekians pueden regenerar salud una vez durante la batalla.

// src/Namekian.js

const Luchador = require('./Luchador');

class Namekian extends Luchador{
  constructor(salud){
    super(salud);
    let regenerado=false;
  }

  /**
   * Regenera salud si aún no lo ha hecho en la batalla.
   */
  regenerarSalud() {
    if (regenerado==false && salud<50) {
      salud=this.salud+30;

      regenerado=true;
    }
  }
}

module.exports = Namekian;
