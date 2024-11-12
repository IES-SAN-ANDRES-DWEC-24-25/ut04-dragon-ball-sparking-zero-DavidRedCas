// src/Saiyan.js
const Luchador = require('../src/Luchador');

class Saiyan extends Luchador{
  constructor(nombre, velocidad, ataque, defensa, salud = 100){
    super(nombre, velocidad, ataque, defensa, salud);
    this.esSuperSaiyan=false;
  }

  /**
   * Transforma al Saiyan en Super Saiyan, aumentando sus atributos.
   */
  transformar() {
    if (!this.esSuperSaiyan) {
      this.ataque*=1.5;
      this.velocidad*=1.3;
      this.defensa*=1.2;
      this.esSuperSaiyan=true;
    }
  }

  /**
   * Revertir la transformación de Super Saiyan.
   */
  revertirTransformacion() {
    if (this.esSuperSaiyan) {
      this.ataque/=1.5;
      this.velocidad/=1.3;
      this.defensa/=1.2;
  
      this.esSuperSaiyan=false;
    }
  }

  intentarHabilidad() {
    super.intentarHabilidad();
    if (this.salud < 50 && !this.intentoHabilidad) {
      if (Math.random() < 0.5) {
        this.transformar();
        console.log(`${this.nombre} se transforma en Super Saiyan y aumenta sus habilidades!`);
      }
    }
  }
}

module.exports = Saiyan;