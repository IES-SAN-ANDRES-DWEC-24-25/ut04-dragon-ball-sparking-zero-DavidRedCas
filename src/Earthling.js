// src/Earthling.js

const Luchador = require('./Luchador');

class Earthling extends Luchador{
  constructor(ataque){
    super(ataque);
    let tecnicaUsada=false;
  }

  /**
   * Usa una técnica especial para aumentar el ataque.
   */
  usarTecnicaEspecial() {
    if (tecnicaUsada==false) {
      ataque=this.ataque*1.4;
      
      tecnicaUsada=true;
    }
  }
}

module.exports = Earthling;
