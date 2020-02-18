//objeto en javascript = una colecion de name/value pairs
var person = {
    firstname: 'John',
    lastname: 'Doe',
    greet: function() {
        console.log('hello,' + this.firstname + ' ' + this.lastname);
    }
}
person.greet();
// se puede acceder con un punto y el nombre del key
console.log(person['firstname']);
//se puede acceder por medio de [] y con '' la key