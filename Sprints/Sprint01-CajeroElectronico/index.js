/**
 * Cajero electrónico con JavaScript
 * OBJETIVO: Simular el trabajo de un cajero electrónico usando lo aprendido en JavaScript
 * El aplicativo debe cumplir los siguientes requerimientos técnicos:
 * 1.   Escribir una lista de usuarios con los siguientes datos: nombre, numero de documento, contraseña y tipo de usario. El tipor de usuario será: 1- administrador, 2- cliente. Guardar en un array de objetos.
 * 2.   Realizar un programa que al inicio solicite ingresar documento y contraseña, si el usuario no existe debe indicar que no existe y volver a preguntar usuario y contraseña, si el usuario es administrador debe permitir cargar el cajero de la siguiente manera
 * 3.   Solicitar la cantidad de billetes de 5, 10, 20, 50 y 100 mil pesos COP
 * 4.   Almacenar esta información en un array de objetos.
 * 5.   Una vez tenga la información, debe mostrar en consola la suma por cada denominación y el total general.
 * 6.   Una vez el cajero esté cargado, debe volver a solicitar usuario y contraseña, si es administrador, se repite el mismo proceso, sumar a la cantidad actual, si es cliente debe proseguir de la siguiente manera:
 * 7.   Si el cajero no tiene dinero cargado, debe aparecer un mensaje en consola: "Cajero en mantenimiento, vuelva pronto." Y reiniciar desde el inicio.
 * 8.   Si el cajero ya tiene dinero cargado, debe preguntar la cantidad deseada a retirar. Una vez obtenida esta información, debe indicar cuanto dinero puede entregar basado en la cantidad disponible y los tipos de billetes. Luego debe mostrar en consola cuando billetes de cada denominación entregó. Priorizando siempre las denominaciones más altas para valores altos y redondeando a la cifra más cercana menor a la solicitada
 * 9.   Posteriormente, debe aparecer en consola, el dinero restante en el cajero por cada denominación
 */

// const billQuantity = { // [quantity, value, totalQuantity]
//     bill_5: [0, 5000, 0],
//     bill_10: [0, 10000, 0],
//     bill_20: [0, 20000, 0],
//     bill_50: [0, 50000, 0],
//     bill_100: [0, 100000, 0]
// }

const formLogin = document.querySelector('.login');
const formLoadATM = document.querySelector('.loadATM');

let ATM = [];

const startATM = () => {
    let loaded = false;
    //while (true) {
        let auth = authenticate();
        if (auth === 'admin') {
            loadATM();
            totalLoadATM();
            withdrawATM();
            loaded = true;
        } else if (auth === 'client') {
            if (loaded) {
                console.log(`Esto es un cliente`);
                console.log(billQuantity);
                withdrawATM();
            } else {
                console.log(`Cajero en mantenimiento, vuelva pronto.`);
            }
            
        } else {
            console.log(`Revise credenciales`);
        }
    //}
}

const loadATM = () => {
    // Object.keys(billQuantity).forEach(key => {
    //     // let quantity = Number.parseInt(prompt(`Digite la cantidad de billetes de $${key.split('_')[1]}000`));
    //     let quantity = 2;
    //     billQuantity[key][0] = billQuantity[key][0] + quantity;
    //     billQuantity[key][2] = billQuantity[key][0] * billQuantity[key][1];
    // });
    let bill5 = Number.parseInt(document.getElementById("bill5").value, 10) || 0;
    let bill10 = Number.parseInt(document.getElementById("bill10").value, 10) || 0;
    let bill20 = Number.parseInt(document.getElementById("bill20").value, 10) || 0;
    let bill50 = Number.parseInt(document.getElementById("bill50").value, 10) || 0;
    let bill100 = Number.parseInt(document.getElementById("bill100").value, 10) || 0;
    ATM = [
        {
            amount: 5000,
            quantity: bill5
        },
        {
            amount: 10000,
            quantity: bill10
        },
        {
            amount: 20000,
            quantity: bill20
        },
        {
            amount: 50000,
            quantity: bill50
        },
        {
            amount: 100000,
            quantity: bill100
        }
    ]
    totalLoadATM();
}

const totalLoadATM = () => {
    let totalQuantityATM = 0;
    Object.keys(ATM).forEach(key => {
        totalQuantityATM += ATM[key].quantity * ATM[key].amount;
    });
    console.log(ATM);
    console.log(totalQuantityATM);
    return totalQuantityATM;
}

const userList = [
    {
        name: 'Calos Montoya',
        noDocument: 11,
        password: 1234,
        typeUsr: 'admin'
    },
    {
        name: 'Andres Lopez',
        noDocument: 22,
        password: 1234,
        typeUsr: 'client'
    },
    {
        name: 'Valeria Aguirre',
        noDocument: 33,
        password: 1234,
        typeUsr: 'client'
    },
    {
        name: 'Sandra Lopez',
        noDocument: 44,
        password: 1234,
        typeUsr: 'admin'
    },
]

const authenticate = () => {
    const documentNo = Number.parseInt(document.getElementById("document").value, 10);
    const password = Number.parseInt(document.getElementById("password").value, 10);

    const filteredUsr = userList.filter(user => user.noDocument === documentNo);
    console.log(filteredUsr);

    if (filteredUsr.length > 0) {
        if (filteredUsr[0].password === password) {
            console.log(`Bienvenido señor ${filteredUsr[0].name}`);
            if (filteredUsr[0].typeUsr === 'admin') {
                return 'admin';
            } else {
                return 'client';
            }
            
        } else {
            console.log(`Wrong password`);
        }
    } else {
        console.log(`Ususario no encontrado`);
    }

}

const withdrawATM = () => {
    let total = 0;
    Object.keys(ATM).forEach(key => {
        total += ATM[key].quantity;
        console.log(ATM[key].quantity);
    });
    // console.log(total);
    if (total === 0) {
        console.log("Cajero en mantenimiento, vuelva pronto.");
        return;
    }
    
    const montoDeseado = Number.parseInt(document.getElementById("quantity").value, 10);
    console.log(montoDeseado);
    const withdrawal = {};
    let montoRestante = montoDeseado;

    ATM.sort((a, b) => b[1] - a[1]);
    console.log(ATM.sort((a, b) => b.amount- a.amount));
    Object.keys(ATM).forEach(bill => {
    const denominacion = bill.amount;
    const cantidadDisponible = bill.quantity;

    if (montoRestante >= denominacion && cantidadDisponible > 0) {
        const cantidadEntregada = Math.floor(montoRestante / denominacion);
        const cantidadRetirada = Math.min(cantidadEntregada, cantidadDisponible);
        withdrawal[denominacion] = cantidadRetirada;
        montoRestante -= denominacion * cantidadRetirada;
        billete.cantidad -= cantidadRetirada;
    } else {
        withdrawal[denominacion] = 0;
    }
    });

    if (montoRestante === 0) {
    console.log(`Monto retirado: ${montoDeseado}`);
    mostrarResultado(retiro);
    } else {
    console.log("No se puede retirar la cantidad solicitada.");
    }
    
}

startATM();