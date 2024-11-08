// src/Earthling.js

const Luchador = require('./Luchador');

class Earthling extends Luchador{
  constructor(ataque){
    super(ataque);
    this.tecnicaUsada=false;
  }

  /**
   * Usa una técnica especial para aumentar el ataque.
   */
  usarTecnicaEspecial() {
    if (this.tecnicaUsada==false) {
      this.ataque*=1.4;
      
      this.tecnicaUsada=true;
    }
  }
}

module.exports = Earthling;
