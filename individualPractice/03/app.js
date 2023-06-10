/**
 * ¿Qué es JavaScript?
 * ¿Qué es una variable?
 * Variable es un espacio de memoria donde podemos guardar información 
 * ¿Qué tipo de datos podemos guardar en las variables? 
 * Todos los tipos de datos
 * ¿Qué tipos de datos existen?
 * -String "", '', ` ` cadena caracteres abecedario $%^&&8625632
 * -Number int: 1,2,3..., float: 1.5,1.6 long (100000000) 1_000_000=1000000
 * -Boolean falsos o verdaderos, false/true
 * -Null, NaN, undefined
 * -Arrays [] [1, true, 7.9, [], {}]
 * -Object {} 
 * 
 * Tipo de dato Number
 * Operaciones suma (+), resta (-), multiplicacion (*), division (/) modulo (%) <= reminder, residuo
 * 
 * Como definimos una variable?
 * Existe dos tipos de variables en JavaScript
 * -let
 * -const 
 * 
 * LET son variables que podemos ***re-asignar***
 * let name = "Sam"; //tipo String
 * let nb = 7; // tipo Number
 * let num = "78"; // tipo String
 * let state = true; // tipo Boolean
 * let list = ["Monica", "Christian", "Nathalia"]; // tipo Array
 * let user = {
 *      name: "Juan Camilo",
 *      id: 189,
 *      password: 12345,
 * };
 * 
 * CONST las variables definidas con const NO pueden ser re-asignadas, esto significa que solo se puede usar el signo = una vez cuando definimos la variable
 * 
 * Propiedades de los String .lenght
 * Metodos Basicos de los Strings 
 * -- .toLowerCase() // convierte todo el string a minusculas
 * -- .toUpperCase() // convierte todo el string a mayusculas
 */

// let
// let language = "c++";
// language = "JavaScript";

let animals = "cat"; // declaracion y asignacion, tipo String
// re-asignacion
animals = "dog"; 
let num1 = 0; // tipo Number
num1 = 7;

//console.log(language); // JavaScript
//console.log(num1);  // cat

const fruits = "pineapple";
let supermarketList = ['leche', 'mantequilla', 'huevos', 'avena', 'arroz', 'pan', 'carne de cerdo'];
supermarketList = ['pollo', 'pescado'];

console.log(supermarketList);

/** ---------------------------------------- */

// Suma de dos numeros
let nb1 = 6;
let nb2 = 3;
// inicializacion
// let resultSuma = 0;
// let resultResta = 0;
// let resultMultiplicacion = 0;
// let resultDivision = 0;
let resultSuma, resultResta, resultMultiplicacion, resultDivision = 0;
// operaciones
resultSuma = nb1 + nb2; // suma de dos numeros
resultResta = nb1 - nb2; // resta de dos numeros
resultMultiplicacion = nb1 * nb2; // multiplicacion de dois numeros
resultDivision = nb1 / nb2; // divison de dos numeros

console.log("Este es un programa que hace operaciones matematicas");
// console.log(nb1);
// console.log(nb2);
console.log("Este es el resultado de la suma" + " " + resultSuma);
console.log("El resultado de la suma es: ", resultSuma);
console.log(`El resultado de la suma es ${resultSuma}`);
// console.log(resultResta);
// console.log(resultMultiplicacion);
// console.log(resultDivision);

// Ejemplo propiedad .lenght
let lastName = "Sanchez";
let logintudLastname = 0;
let lower = "";
let upper = "";

logintudLastname = lastName.length;
lower = lastName.toLowerCase();
upper = lastName.toUpperCase();


console.log(`La longitud del apellido ${lastName} es ${logintudLastname}`);
console.log(lower);
console.log(upper);
console.log(lastName);

// console.log(lastName[6]);
console.log(lastName.at(3));

/**
 * - Escriba un programa que me muestre en pantalla la edad que tendra el usuario en el siguiente año (añadiento 1 a la edad actual)
 * 
 * que muestre en pantalla -> console.log
 * variable que guarde la edad inicial del usuario
 * sumar 1 a la edad del usuario
 */





