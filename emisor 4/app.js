var util = require('util');
function person()
{
    this.firstname = 'John';
    this.lastname = 'Doe';
}
person.prototype.greet = function ()
{
    console.log(`Hello ${this.firstname} ${this.lastname}`);
}
function Policeman()
{
    person.call(this);
    this.badgenumber = '1234';
}
util.inherits(Policeman, person)
var officer = new Policeman();
officer.greet();