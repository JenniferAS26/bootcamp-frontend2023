/**
 * 1. Realizar una función que recibe 3 parámetros, los 2 primeros de tipo número, y el tercero un string indicando la operación a realizar suma, resta, multiplicación o división Debe retornar el resultado de la operación indicada
 */

const operations = (number1, number2, operation) => {
    if (operation.toLowerCase() === 'suma') {
        return number1 + number2;
    } else if (operation.toLowerCase() === 'resta') {
        return number1 - number2;
    } else if (operation.toLowerCase() === 'multiplicacion') {
        return number1 * number2;
    } else {
        return number1 / number2;
    }
}

console.log(operations(2, 3, 'DIVISION'));

/**
 * 2. Crea una función que genere 100 números aleatorios entre 1 y 1000 que no se repitan y luego muéstralos ordenados en consola
 */
const randomNumbersGenerator = (min, max) => {
    const arrRandomNumbers = [];
    while (arrRandomNumbers.length <= 100) {
       let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
       if (arrRandomNumbers.indexOf(randomNumber) === -1) {
        arrRandomNumbers.push(randomNumber);    
       }
    }
    //arrRandomNumbers.sort((a, b) => b - a); // ordenados de mayor a menor
    arrRandomNumbers.sort((a, b) => a - b); // ordenados de menor a mayor
    console.log(arrRandomNumbers);
}

randomNumbersGenerator(1, 1000);

/**
 * 3. Realizar una función que recibe 2 parámetros, el primero es un array de una lista de usuarios que debe contener nombre, apellidos y teléfonos, al menos 3 de esos usuarios deben comenzar con la letra "a" el segundo parámetro es un callback Debe procesar el array y eliminar todos los usuarios cuyo nombre inicie con la letra "a" Posteriormente, enviar el nuevo array procesado al callback El callback debe mostrar en consola, la lista de todos los nombres, concatenando nombre y apellido
 */
const filterAndProcessUsers = (users, callback) => {
    let filteredUsers = users.filter(user => !user.name.toLowerCase().startsWith('a'));
    let concaNames = filteredUsers.map(user => `${user.name} ${user.lastname}`);

    callback(concaNames);
}

const users = [
    {
        name: 'Camila',
        lastname: 'Maya',
        telephones: ['3216547890', '1236547895', '7418529634']
    },
    {
        name: 'Antonio',
        lastname: 'Lopez',
        telephones: ['3216547890', '1236547895', '7418529634']
    },
    {
        name: 'Felipe',
        lastname: 'Gomez',
        telephones: ['3216547890', '1236547895', '7418529634']
    },
    {
        name: 'Anderson',
        lastname: 'Cortez',
        telephones: ['3216547890', '1236547895', '7418529634']
    },
    {
        name: 'Lorena',
        lastname: 'Perez',
        telephones: ['3216547890', '1236547895', '7418529634']
    },
    {
        name: 'Amanda',
        lastname: 'Serna',
        telephones: ['3216547890', '1236547895', '7418529634']
    },
    {
        name: 'Julian',
        lastname: 'Ocampo',
        telephones: ['3216547890', '1236547895', '7418529634']
    },
]

const showNames = (names) => {
    names.forEach(name => console.log(name));
}

filterAndProcessUsers(users, showNames);
