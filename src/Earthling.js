// src/Earthling.js

const Luchador = require('./Luchador');

class Earthling extends Luchador{
  constructor(nombre, velocidad, ataque, defensa, salud = 100){
    super(nombre, velocidad, ataque, defensa, salud);
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

  intentarHabilidad() {
    super.intentarHabilidad();
    if (this.salud < 50 && !this.intentoHabilidad) {
      if (Math.random() < 0.5) {
        this.usarTecnicaEspecial();
        console.log(`${this.nombre} usa su técnica especial y aumenta su ataque!`);
      }
    }
  }
}

module.exports = Earthling;
