'use strict';
var EventEmitter = require('events');
//nos permite disparar los eventos desde cualquier lugar 
class Greetr extends EventEmitter{
    constructor(){
        super();
        this.greeting = 'Hola mundo!';
    }
    greet(data){
        console.log(`${this.greeting}: ${data}`);
        this.emit('greet', data)
    }
}
var greeter1 = new Greetr();
greeter1.on('greet', function(data){
    console.log('hola desde la funcion: ' + data);
})
// se pasa mi parametro
greeter1.greet('jose');