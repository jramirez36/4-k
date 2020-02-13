//exportar un solo metodo
var greet = require('./greet');
greet();
//exportar un metodo a otra clase
var greet2 = require('./greet2.js').greet;
greet2();
//crear un nuevo objeto
var greet3 = require('./greet3');
greet3.greet();
//interactuar con el nuevo objeto
greet3.greeting = 'changed hello word !!';
//require da una misma direccion los cambios se guardan
var greet3b = require('./greet3');
greet3b.greet();
// se pasa la clase y se permite crear los objetos que quieras(modulo que exporta una clase)
var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();