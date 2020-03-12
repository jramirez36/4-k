var Emitter = require('events');
//llamamos nuestra pagina de configuracion donde tenemos nuestras variables
var config = require('./config');
var emtr = new Emitter();
//guardamos una funcion la cual va responder al nombre guardado en el archivo configuracion en la parte de eventos con el nombre- 
//guardado en GREET 
emtr.on(config.events.GREET, function () {
    console.log('somewhere, someone said hello. ')
});
//guardamos una segunda funcion la cual va responder al nombre guardado en el archivo configuracion en la parte de eventos con el nombre- 
//guardado en GREET 
emtr.on(config.events.GREET, function () {
    console.log('A greeting ocurred!')
});
console.log('hello!');
//decimos que invoque todas las funciones que respondan a ese nombre
emtr.emit('greet');