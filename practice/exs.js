/** 1.   Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.  */

console.log('Hello World');

/** 2.  Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).  */

document.write('Hello World')

/** 3.   Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.  */

console.log(3 + 5);

/** 4.   Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”  */

// let name = prompt('Escribe tu nombre')
// console.log(`Hola ${name}`);

/** 5.   Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.  */

// let nb1 = Number.parseInt(prompt('Escriba el primer numero'), 10);
// let nb2 = Number.parseInt(prompt('Escriba el segundo numero'), 10);
// console.log(nb1 + nb2);

/** 6.   Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.  */

// let nb1 = Number.parseInt(prompt('Escriba el primer numero'), 10);
// let nb2 = Number.parseInt(prompt('Escriba el segundo numero'), 10);

// if (nb1 > nb2) {
//     console.log(`El numero mayor es ${nb1}`);
// } else {
//     console.log(`El numero mayor es ${nb2}`);
// }

/** 7.   Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.  */

let nb1 = 1;
let nb2 = 5;
let nb3 = 3;

// let nb1 = Number.parseInt(prompt('Escriba el primer numero'), 10);
// let nb2 = Number.parseInt(prompt('Escriba el segundo numero'), 10);
// let nb3 = Number.parseInt(prompt('Escriba el segundo numero'), 10);

let arr = [];
let item1 = arr.push(nb1)
let item2 = arr.push(nb2)
let item3 = arr.push(nb3)
console.log(arr);
console.log(Math.max(...arr));

/** 8.   Escribe un programa que pida un número y diga si es divisible por 2  */

// let nb = Number.parseInt(prompt('Escriba un numero'), 10);
let nb = 26;
 if (nb % 2 === 0) {
    console.log(`${nb} es divisible por 2`)
 } else {
    console.log(`${nb} no es divisible por 2`);
 }

/** 9.   Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a  */
let phrase = 'Esta frase va a identificar las vocales incluidas aqui';
// let phrase = prompt('Escriba una frase aqui');
let count = 0;
// for (let index = 0; index < phrase.length; index++) {
//     if (phrase[index] === 'a') {
//         count++
//     }    
// }
Array.from(phrase).forEach(element => {
    if (element === 'a') {
        count++
    }
});
console.log(count);

/** 10.   Escribe un programa que pida una frase y escriba las vocales que aparecen  */
/** 11.   Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales */
/** 12.   Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales  */

let phraseV = 'Esta es una frase que tiene muchas vocales';
let vowels = [];
Array.from(phraseV).forEach(letter => {
    console.log(letter);
    switch (letter.toLowerCase()) {
        case 'a':
            console.log(`Esta es una a`);
            vowels.push(letter)
            break;
        case 'e':
            console.log(`Esta es una e`);
            vowels.push(letter)
            break;
        case 'i':
            console.log(`Esta es una i`);
            vowels.push(letter)
            break;
        case 'o':
            console.log(`Esta es una o`);
            vowels.push(letter)
            break;
        case 'u':
            console.log(`Esta es una u`);
            vowels.push(letter)
            break;
    }
});
console.log(vowels);
/** 13.   Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)  */
/** 14.   Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible)  */

let num = 30;
if (num % 2 == 0) {
    console.log(`${num} es divisible por 2`);
}
if (num % 3 == 0) {
    console.log(`${num} es divisible por 3`);
}
if (num % 5 == 0) {
    console.log(`${num} es divisible por 5`);
}
if (num % 7 == 0) {
    console.log(`${num} es divisible por 7`);
}

/** 15.   Escribir un programa que escriba en pantalla los divisores de un número dado  */

let numb = 4;
let counter = 0;
for (let i = 0; i <= numb; i++) {
    if (numb % i == 0) {
        console.log(i);
    }
    
}
console.log(`///////////////`);
/** 16.   Escribir un programa que escriba en pantalla los divisores comunes de dos números dados */
/** 17.   Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad) */

let number = 23;
let flag = false;
for (let i = 2; i < number; i++) {
    if (number % i == 0) { // divisores
        flag = true;
    }
}
if (flag) {
    console.log(`${number} no es primo`);
} else {
    console.log(`${number} es primo`);
}