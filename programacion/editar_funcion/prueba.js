var x = 100;
function prueba() {
    //hoisting es el hecho de que al declarar un valor ya declarado las primeras lineas este saldra indefinido hasta llegar a la linea
    //donde este es declarado de nuevo
    console.log(`el valor de x es ${x}`);
    var x = 200;
    console.log(`el valor de x es ${x}`);
}
prueba();