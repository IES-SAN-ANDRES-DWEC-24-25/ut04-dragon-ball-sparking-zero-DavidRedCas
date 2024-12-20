// src/Luchador.js

class Luchador {
  // Implementa el constructor y los métodos necesarios
constructor(nombre, velocidad, ataque, defensa, salud = 100){
  this.nombre=nombre;
  this.velocidad=velocidad;
  this.ataque=ataque;
  this.defensa=defensa;
  this.salud=salud;

  this.intentoHabilidad = false;
}

esquivar(){
  if (Math.random()<0.2) {
    return true;
  } else{
    return false;
  }
}

  /**
   * Realiza un ataque contra un oponente.
   * @param {Luchador} oponente - El luchador que recibe el ataque.
   * @returns {Object} - Resultado del ataque.
   */
  atacar(oponente) {
    let daño=Math.round(this.ataque-(oponente.defensa*0.75));
    // Decidir si el ataque es esquivado
    if (oponente.esquivar()) {
      daño=0;
      console.log(`${oponente.nombre} esquivó el ataque de ${this.nombre}!`);
    }

    // Calcular daño
    if (!oponente.esquivar()) {
      if (oponente.defensa > this.ataque){
        daño = Math.round((this.ataque*0.25)*0.9);
      }else {
        daño = Math.round(this.ataque*0.25);
      }
    }
    
    

    // Aplicar daño al oponente
    oponente.recibirDanio(daño);

    // Retornar resultado del ataque
    return daño;
  }

  /**
   * Aplica daño a la salud del luchador.
   * @param {number} daño - Cantidad de daño recibido.
   */
  recibirDanio(daño) {
    // Asegurar que el daño no sea negativo
    if (daño<0) {
      daño=0;
    }
      this.salud-=daño;
      if (this.salud<0) {
        this.salud=0;
      }
      //return console.log(`${this.nombre} ataca a ${oponente.nombre} y causa ${daño} de daño.`);
  }

  /**
   * Verifica si el luchador está vivo.
   * @returns {boolean} - `true` si la salud es mayor a 0, `false` en caso contrario.
   */
  estaVivo() {
    if (this.salud>0) {
      return true;
    } else {
      return false;
    }
  }

  intentarHabilidad() {
    if (this.salud < 50 && !this.intentoHabilidad) {
      this.intentoHabilidad = true;
    }
  }
}

module.exports = Luchador;
