var person =
{
    firstname: '',
    lastname: '',
    greet: function ()
    {
        return this.firstname + ' ' + this.lastname;
    }
}
//permite invocar una funcion sin la parte de new function
var john = Object.create(person);
john.firstname = 'john';
john.lastname = 'Doe';
var jane = Object.create(person);
jane.firstname = 'jane';
jane.lastname = 'Doe';

console.log(john.greet());
console.log(jane.greet());