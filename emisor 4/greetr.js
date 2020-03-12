'use strict';
var EventEmitter = require('events');
//nos permite disparar los eventos desde cualquier lugar 
module.exports = class Greetr extends EventEmitter{
    constructor(){
        super();
        this.greeting = 'Hola mundo!';
    }
    greet(data){
        console.log(`${this.greeting}: ${data}`);
        this.emit('greet', data)
    }
}
