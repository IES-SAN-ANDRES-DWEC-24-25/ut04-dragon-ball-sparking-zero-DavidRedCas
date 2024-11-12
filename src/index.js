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
    new Saiyan('Vegeta', 80, 85, 70),
    new Namekian('Slug', 70, 75, 80),
    new Earthling('Bulma', 78, 78, 85),
    new Saiyan('Nappa', 85, 90, 75),
    new Namekian('Nail', 90, 85, 80),
];

// Crear y iniciar el torneo
const torneo = new Torneo(luchadores);
const campeon = torneo.iniciar();
