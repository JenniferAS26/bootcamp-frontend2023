const sumNumbers = (number1, number2) => {
    if (number2 !== undefined) {
        return number1 + number2;
    } else {
        return number1 + 10;
    }
}

console.log(`Suma cuando los dos numeros existen ${sumNumbers(2, 3)}`);
console.log(`Suma cuando uno de los numeros no existe ${sumNumbers(5)}`);

const arr = [];
const addItems = (item) => {
    arr.push(item);
}

const deleteItems = (index) => {
    console.log(`este es el index ${index}`);
    if (index >= arr.length) {
        arr.pop(); // elimina el ultimo elemento de array
        console.log(`se ejecuto el .pop()`);
    } else {
        arr.splice(index, 1); // elimina el elemento en la posicion indicada y cuantos elementos a partir de esa posicion
        console.log(`se ejecuto el .slice()`);
    }
}
 // Callback es una funcion que recibe otra funcion como parametro y la ejecuta adentro
const changeArray = (addElement, id) => {
    const obj = {
        id,
        type: 'animal',
        name: 'Timmy'
    }
    addElement(obj);
    return arr;
}

changeArray(addItems, 1);
changeArray(addItems, 2);
changeArray(addItems, 3);
console.log(arr);

deleteItems(20);
deleteItems(1);
console.log(arr);
