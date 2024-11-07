// src/Saiyan.js
const Luchador = require('../src/Luchador');

class Saiyan extends Luchador{
  constructor(ataque, defensa, velocidad){
    super(ataque, defensa, velocidad);
    let esSuperSaiyan=false;
  }

  /**
   * Transforma al Saiyan en Super Saiyan, aumentando sus atributos.
   */
  transformar() {
    if (esSuperSaiyan==false) {
      ataque=this.ataque*1.5;
      velocidad=this.velocidad*1.3;
      defensa=this.defensa*1.2;

      esSuperSaiyan=true;
    }
  }

  /**
   * Revertir la transformación de Super Saiyan.
   */
  revertirTransformacion() {
    if (esSuperSaiyan==true) {
      ataque=this.ataque;
      velocidad=this.velocidad;
      defensa=this.defensa;
  
      esSuperSaiyan=false;
    }
  }
}

module.exports = Saiyan;