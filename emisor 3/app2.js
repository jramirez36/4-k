var EventEmitter = require('events');
var util = require('util');
//nos permite disparar los eventos desde cualquier lugar 
function Greetr()
{
    this.greeting = 'Hola mundo!';
}
util.inherits(Greetr, EventEmitter);
Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ' ' + data);
    this.emit('greet', data);
}
var greeter1 = new Greetr();
greeter1.on('greet', function(data){
    console.log('hola desde la funcion: ' + data);
})
// se pasa mi parametro
greeter1.greet('jose');