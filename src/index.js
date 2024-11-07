// src/index.js

const Saiyan = require('./Saiyan');
const Namekian = require('./Namekian');
const Earthling = require('./Earthling');
const Torneo = require('./Torneo');

// Crear luchadores de prueba con diferentes razas
const luchadores = [
    new Saiyan('Goku', 90, 95, 80),
    new Namekian('Piccolo', 80, 85, 70),
    new Earthling('Gohan', 88, 88, 78),
    new Saiyan('', 80, 85, 70),
    new Namekian('', 70, 75, 80),
    new Earthling('', 78, 78, 85),
    new Saiyan('', 85, 90, 75),
    new Earthling('', 90, 85, 80),
];

// Crear y iniciar el torneo

