// src/Luchador.js

class Luchador {
    // Implementa el constructor y los métodos necesarios
  constructor(nombre, velocidad, ataque, defensa, salud){
    this.nombre=nombre;
    this.velocidad=velocidad;
    this.ataque=ataque;
    this.defensa=defensa;
    this.salud=salud;
  }
  
    /**
     * Realiza un ataque contra un oponente.
     * @param {Luchador} oponente - El luchador que recibe el ataque.
     * @returns {Object} - Resultado del ataque.
     */
    atacar(oponente) {
      // Decidir si el ataque es esquivado
      
  
      // Calcular daño
      
  
      // Asegurar que el daño no sea negativo
      
  
      // Aplicar daño al oponente
     
  
      // Retornar resultado del ataque
      
    }
  
    /**
     * Aplica daño a la salud del luchador.
     * @param {number} danio - Cantidad de daño recibido.
     */
    recibirDanio(danio) {
      salud=salud-danio;
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
  