// src/simularBatalla.js

/**
 * Simula una batalla entre dos luchadores.
 * @param {Luchador} luchador1 - Primer luchador.
 * @param {Luchador} luchador2 - Segundo luchador.
 * @returns {Luchador} - Ganador de la batalla.
 */
function simularBatalla(luchador1, luchador2) {
    console.log(`\nComienza la batalla entre ${luchador1.nombre} y ${luchador2.nombre}!`);
  
    
  
    // Determinar quién ataca primero basado en la velocidad
    if (luchador1.velocidad>luchador2.velocidad) {
      atacante=luchador1;
    }else{
      atacante=luchador2;
    }
      // Si la velocidad es igual, elegir al azar
    if (luchador1.velocidad==luchador2.velocidad) {
      numAzar=Math.floor(Math.random()*2);
      if (numAzar==0) {
        atacante=luchador1;
      } else {
        atacante=luchador2;
      }
    }
  
    console.log(`${atacante.nombre} tiene mayor velocidad y ataca primero.`);
  
    // Simular turnos hasta que uno de los luchadores pierda
    while (luchador1.salud>0 && luchador2.salud>0) {
      
    }
    
    const ganador = null;
    if (luchador1.salud<=0) {
      ganador=luchador2;
    } else {
      ganador=luchador1;
    }

    console.log(`El ganador de la batalla es ${ganador.nombre}!\n`);
    return ganador;
  }
  
  module.exports = simularBatalla;
  