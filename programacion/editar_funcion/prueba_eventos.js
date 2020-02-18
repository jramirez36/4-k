//funcion para tener acceso al nombre y apellido
function Person(firsname, lastname){
    this.firsname = firsname;
    this.lastname = lastname;
}
//.Prototype agrega un atributo o un metodo ala funcion extra
Person.prototype.greet = function()
{
    console.log('hello, ' + this.firsname + ' ' + this.lastname);
}
var jonh = new Person('john', 'Doe');
jonh.greet();
var jane = new Person('jane', 'Doe');
jane.greet();
console.log(jonh.__proto__);
console.log(jane.__proto__);
console.log(jonh.__proto__ === jane.__proto__);