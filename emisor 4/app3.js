var Greetr = require('./greetr');
//se llama ala clase greeter
var greeter1 = new Greetr();
greeter1.on('greet', function(data){
    console.log('hola desde la funcion: ' + data);
})
// se pasa mi parametro
greeter1.greet('jose');