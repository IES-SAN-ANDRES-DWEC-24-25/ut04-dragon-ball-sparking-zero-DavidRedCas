// src/Torneo.js

const simularBatalla = require('./simularBatalla');
const { esPotenciaDeDos, mezclarArray } = require('./utils');

class Torneo {
  /**
   * Crea una instancia de Torneo.
   * @param {Luchador[]} luchadores - Array de luchadores participantes.
   */
  constructor(luchadores) {
    if (esPotenciaDeDos(luchadores.length)==false) {
      throw new Error('El número de luchadores debe ser una potencia de 2.');
    }
    this.luchadores = luchadores;
  }

  /**
   * Inicia el torneo, simulando las rondas hasta determinar un campeón.
   * @returns {Luchador} - El campeón del torneo.
   */
  iniciar() {
    let participantes=[...this.luchadores]; // Copiar el array de luchadores
    mezclarArray(participantes);
    console.log(`\nIniciando el torneo con ${participantes.length} luchadores!\n`);

    // Simular rondas hasta que quede un solo luchador
    let ronda = 1;
    while (participantes.length > 1) {
      console.log(`--- Ronda ${ronda} ---`);
      let ganadores = [];

      for (let i = 0; i < participantes.length; i += 2) {
        const luchador1 = participantes[i];
        const luchador2 = participantes[i + 1];
        const ganador = simularBatalla(luchador1, luchador2);
        ganadores.push(ganador);
      }

      participantes = ganadores;
      ronda++;
    }

    const campeón = participantes[0];
    console.log(`El campeón del torneo es ${campeón.nombre}!\n`);
    return campeón;
  }
}

module.exports = Torneo;
