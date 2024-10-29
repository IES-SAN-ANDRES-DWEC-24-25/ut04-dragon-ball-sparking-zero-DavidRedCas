// src/Earthling.js

const Luchador = require('./Luchador');

class Earthling extends Luchador{
  constructor(ataque){
    super(ataque);
  }

  /**
   * Usa una técnica especial para aumentar el ataque.
   */
  usarTecnicaEspecial() {
    this.ataque=this.ataque*1.20;
  }
}

module.exports = Earthling;
