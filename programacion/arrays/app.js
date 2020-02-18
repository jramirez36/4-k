var obj = {
    greet: 'hello'
}
//permite acceder al key del objeto 
console.log(obj.greet);
console.log(obj['greet']);
//permite acceder con el nombre siempre y cuando exista
var prop = 'greet';
console.log(obj[prop]);
// se permite guardar funciones en arrays
var arr = [];
arr.push(function() {
    console.log('hello word 1');
});
arr.push(function() {
    console.log('hello word 2');
});
arr.push(function() {
    console.log('hello word 3');
});
//permite correr con las funciones 
arr.forEach(function(item) {
    item();
})