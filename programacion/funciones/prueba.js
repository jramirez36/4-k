function greet() 
{
    console.log(`hi pero de function`);
}
//
// function de flecha
// function expression es cuando una variable le asigno una funcion como abajo
let greet1 = () => {
    console.log(`hi de variable que tiene una function`);
}
greet1();
//function are first-class es cuando puedo pasar una function como variable
function logGreenting(fn)
{
    fn();
}
logGreenting(greet);
let logGreenting1 = (fn) => 
{
    fn();
}
logGreenting1(greet1);
// mandando una function por completo
//function expression on the fly
logGreenting1(() => {
    console.log(`hi`);
});

// comprobado que `` se ocupa para concatenar con ${}
function suma()
{
    let a = 10;
    console.log(`prueba de por que usar ${a}`);
    // string interpolation 
    // template string
}
suma();
// `${a}` forma de concatenar actual
