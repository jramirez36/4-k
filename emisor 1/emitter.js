function Emitter()
{
    this.events = {};
}
//modulo para guardar funciones en mi array
Emitter.prototype.on = function(type, listener) {
    //validacion para ver si tiene un nombre o esta vacio
    this.events[type] = this.events[type] || [];
    //se sube la funcion
    this.events[type].push(listener);
}
//modulo para invocar las funciones correspondientes
Emitter.prototype.emit = function(type) {
    //revisa que existan funciones que responden al nombre
    if(this.events[type])
    {
        //ejecuta las funciones que responden al nombre en el array
        this.events[type].forEach(function(listener)
        {
            listener();
        })
    }
}
module.exports = Emitter;