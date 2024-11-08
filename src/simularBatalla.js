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
    oponente=luchador2;
  }else{
    atacante=luchador2;
    oponente=luchador1;
  }
    // Si la velocidad es igual, elegir al azar
  if (luchador1.velocidad==luchador2.velocidad) {
    numAzar=Math.floor(Math.random()*2);
    if (numAzar==0) {
      atacante=luchador1;
      oponente=luchador2;
    } else {
      atacante=luchador2;
      oponente=luchador1;
    }
  }

  console.log(`${atacante.nombre} tiene mayor velocidad y ataca primero.`);

  // Simular turnos hasta que uno de los luchadores pierda
  while (luchador1.salud>0 && luchador2.salud>0) {
    atacante.atacar(oponente);
    oponente.recibirDanio(daño);
    console.log(`${oponente.nombre} tiene ${oponente.salud} de salud restante.`);
    [atacante, oponente] = [oponente, atacante];
  }
  
  const ganador = null;
  if (atacante.salud<=0) {
    ganador=oponente;
  } else {
    ganador=atacante;
  }

  console.log(`El ganador de la batalla es ${ganador.nombre}!\n`);
  return ganador;
}

module.exports = simularBatalla;
