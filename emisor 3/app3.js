var obj = {
    name: 'Jose Ramirez',
    posicion: 'maestro',
    greet: function(param)
    {
        if(param === undefined)
        {
            param = 'que tal esta';
        }
        console.log(`Hola ${this.posicion} ${this.name} ${param}`);
    }
}
//se invoca la funcion
obj.greet();
// editamos el valor name con el metodo call 
obj.greet.call({name: 'Ana Ramirez', posicion: 'maestra'});
obj.greet.apply({name: 'Jose Ramirez', posicion: 'maestro'});
var param = 'Esta bien ?';
obj.greet.call({name: 'Ana Ramirez', posicion: 'maestra'}, param);