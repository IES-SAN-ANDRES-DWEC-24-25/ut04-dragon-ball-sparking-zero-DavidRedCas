// src/Luchador.js

class Luchador {
    // Implementa el constructor y los métodos necesarios
  constructor(nombre, velocidad, ataque, defensa, salud = 100){
    this.nombre=nombre;
    this.velocidad=velocidad;
    this.ataque=ataque;
    this.defensa=defensa;
    this.salud=salud;
  }

  esquivar(){

  }
  
    /**
     * Realiza un ataque contra un oponente.
     * @param {Luchador} oponente - El luchador que recibe el ataque.
     * @returns {Object} - Resultado del ataque.
     */
    atacar(oponente) {
      // Decidir si el ataque es esquivado
  
      // Calcular daño
      if (oponente.defensa > this.ataque){
         daño = this.ataque*0.9;
      }
      else {
        daño = this.ataque;
      }
   
      // Asegurar que el daño no sea negativo
      if (danio<0) {
        danio
      }
  
      // Aplicar daño al oponente
     
  
      // Retornar resultado del ataque
      return this.ataque;
    }
  
    /**
     * Aplica daño a la salud del luchador.
     * @param {number} danio - Cantidad de daño recibido.
     */
    recibirDanio(danio) {
        salud=salud-danio;
        if (salud<0) {
          salud=0;
        }
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
  }
  
  module.exports = Luchador;
  