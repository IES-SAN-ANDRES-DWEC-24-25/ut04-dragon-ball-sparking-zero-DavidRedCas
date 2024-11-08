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
  if (luchador1.velocidad===luchador2.velocidad) {
    numAzar=Math.random();
    if (numAzar<0.5) {
      atacante=luchador1;
      oponente=luchador2;
    } else {
      atacante=luchador2;
      oponente=luchador1;
    }
  } else{
    if (luchador1.velocidad>luchador2.velocidad) {
      atacante=luchador1;
      oponente=luchador2;
    } else {
      atacante=luchador2;
      oponente=luchador1;
    }
  }

  console.log(`${atacante.nombre} tiene mayor velocidad y ataca primero.`);

  // Simular turnos hasta que uno de los luchadores pierda
  while (atacante.estaVivo() && oponente.estaVivo()) {
    if(oponente.estaVivo()){
    daño=atacante.atacar(oponente);
    console.log(`${atacante.nombre} ataca a ${oponente.nombre} con ${daño}.`);
    console.log(`${oponente.nombre} tiene ${oponente.salud} de salud restante.`);
    }
    
    if(atacante.estaVivo()){
    daño=oponente.atacar(atacante);
    console.log(`${oponente.nombre} ataca a ${atacante.nombre} con ${daño}.`);
    console.log(`${atacante.nombre} tiene ${atacante.salud} de salud restante.`);
    }
  }
  
  let ganador = null;
  if (atacante.salud<=0) {
    ganador=oponente;
  } else {
    ganador=atacante;
  }

  console.log(`El ganador de la batalla es ${ganador.nombre}!\n`);
  return ganador;
}

module.exports = simularBatalla;
