// src/Saiyan.js


class Saiyan extends Luchador{
  constructor(ataque, defensa, salud){
    super(ataque, defensa, salud);
  }

  /**
   * Transforma al Saiyan en Super Saiyan, aumentando sus atributos.
   */
  transformar() {
    defensa=this.defensa*1.20;
    ataque=this.ataque*1.20;
  }

  /**
   * Revertir la transformación de Super Saiyan.
   */
  revertirTransformacion() {
    defensa=this.defensa;
    ataque=this.ataque;
  }
}

module.exports = Saiyan;