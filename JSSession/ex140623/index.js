/**
 * Pedir notas y mostrar un mensje de acuerdo a rango que este la calificacion
 * ej 0-2 muy deficiente,
 * 3-5 insuficiente
 * 6 bueno
 * 7-9 sobresaliente
 * 10 excelente
 */

// let grade = -1;

// if (grade >= 0 && grade <= 2) {
//     console.log('Muy deficiente');
// } else if (grade >= 3 && grade <= 5) {
//     console.log('Insuficiente');
// } else if (grade === 6) {
//     console.log('Bueno');
// } else if (grade >= 7 && grade <= 9) {
//     console.log('Sobresaliente');
// } else if (grade === 10) {
//     console.log('Excelente');
// } else {
//     console.log('Calificacion invalida');
// }

/**
 * Realiza un script que escriba los números del 1 al 500,
que indique cuales son múltiplos de 4 y de 9
que cada 5 líneas muestre una línea horizontal.
 */

for (let index = 1; index <= 500; index++) {
    console.log(index); 
    if (index % 4 === 0) {
        console.log(`Este es un multiplo de 4: ${index}`);
    }
    if (index % 9 === 0) {
        console.log(`Este es un multiplo de 9: ${index}`);
    }
    if (index % 5 === 0) {
        console.log(`_____`);
    }
}