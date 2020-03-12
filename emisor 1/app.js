var Emitter = require('./emitter');
var emtr = new Emitter();
//guardamos una funcion la cual va responder cuando se llame a greet
emtr.on('greet', function () {
    console.log('somewhere, someone said hello. ')
});
//guardamos una segunda funcion la cual va responder cuando se llame a greet
emtr.on('greet', function () {
    console.log('A greeting ocurred!')
});
console.log('hello!');
//decimos que invoque todas las funciones que respondan a ese nombre
emtr.emit('greet');