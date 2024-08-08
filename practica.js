//comentarios
// alt + 39''
//alert('Hola desde un alert');

//var es igual que let (declarar una variable)
//var apellido = "rojas";
let nombre = "Eva";

const pi = 3.14;
//string nombre = "juan";
//tipos de datos

// No definido
let noDefinido;
//Numero
let cantidad = 50;
//Cadena de texto o string
let bebida = "agua";
//booleanos
let activo = true;

//objetos
//persona: nombre, apellido, edad, peso
let persona = {nombre :'Anel', apellido : 'Gonzalez', edad : 30,}
console.log(persona);
//arrays (coleccion)
let personas = [
{nombre: 'Melanie', apellido :'matus', edad: 21},
{nombre: 'Mayra', apellido :'arias', edad: 19},
{nombre: 'Belinda', apellido :'Yuleni', edad: 18},
persona
]
console.log(personas);
console.log(personas[2]);

//funciones JS
//listado de instrucciones
function suma(a, b) {
    return a + b;
}
let resultado =suma(5, 3);
console.log(resultado);

function multiplicacion(a,b) {
    return a * b;
    
}
let resultadoMulti = multiplicacion(6,2);
console.log(resultadoMulti);

// Operadores aritmeticos
let datoA = 10;
let datoB = 5;

// suma

//let suma = datoA + datoB;
// resta
let resta = datoA - datoB;
// multiplicación 
let multip = datoA * datoB;
// división
let div = datoA / datoB;
// Modulo o residuo
let residuo = datoA % datoB;
// incremento
let incremento = datoA;
incremento++;
// decremento 
let decremento = datoA;
decremento --;
// *******************************
// operadores relacionales
// mayor que >
let mayorQue = datoA > datoB;
// menor que <
let menorQue = datoB < datoB;
// mayor o igual >=
let menorIgual = datoB <= datoB;
// igual que == 
let igual = datoA == datoB;
// diferente de !=
let diferenteDe = datoA != datoB;
// *********************************
// Operadores lógicos
// y &&
let and = (datoA < 10 && datoB > 10);
// or ||
let or = (datoA > 10 || datoB > 10);
// not !
let not= !(datoA < 10);
// ////////////////////////////////////
// Operadores de asignacion
// Asignación simple =
let dato1 = 60;
// summar y asignar +=
let masigual = 10;
masigual += datoA;
// Menos igual -=
let menosIgual= 10;
menosIgual -= datoB;
// Por 
