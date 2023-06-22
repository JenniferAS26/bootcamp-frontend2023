// Lista de usuarios
const users = [
    { name: "Admin", document: "admin", password: "admin", typeUser: 'admin' },
    { name: "Client", document: "1234", password: "client", typeUser: 'client' }
];

// Variables globales
let ATM = [
    {
        amount: 5000,
        quantity: 0
    },
    {
        amount: 10000,
        quantity: 0
    },
    {
        amount: 20000,
        quantity: 0
    },
    {
        amount: 50000,
        quantity: 0
    },
    {
        amount: 100000,
        quantity: 0
    }
];


// Funcion para iniciar sesion
const login = () => {
    const document = prompt('Documento:').toLowerCase().trim(); // pequeña ayuda al usuario por si ingresa espacios vacios al principio y al final
    const password = prompt('Contraseña:').trim(); // pequeña validacion de seguridad 
    const userFound = users.find(user => user.document === document);
    if (userFound.password === password) {
        if (userFound.typeUser === 'admin') {
            ATM = chargeATM();
            printBills();
            login();
        } else {
            withdrawATM();
            printBills();
            login();
        }   
    } else {
        console.log('Usuario o contraseña incorrecto, intente de nuevo');
        alert('Usuario o contraseña incorrecto, intente de nuevo');
        login();
    }
    
}

// Funcion para cargar el cajero
const chargeATM = () => {
    let newATMCharged = [];
    ATM.forEach(pair => {
        let billQuantity = Number.parseInt(prompt(`Ingrese la cantidad de billetes de $${pair.amount} que desea cargar`), 10) || 0;
        newATMCharged.push({amount: pair.amount, quantity: pair.quantity + billQuantity})
    });
    const totalMoneyArray = newATMCharged.map(pair => pair.amount * pair.quantity);
    const totalMoneyAvialable = totalMoneyArray.reduce((a, b) => {
        return a + b;
    }, 0);
    alert(`El cajero tiene $${totalMoneyAvialable} de saldo`);
    return newATMCharged;
}

const withdrawATM = () => {
    const quantityDiffZero = ATM.some(element => element.quantity !== 0);
    if (quantityDiffZero) {
        const totalMoneyArray = ATM.map(pair => pair.amount * pair.quantity);
        const totalMoneyATM = totalMoneyArray.reduce((a, b) => {
            return a + b;
        }, 0);
        const moneyToWithdraw = Number.parseInt(prompt('Cuanto dinero desea retirar?'),10);
        if (moneyToWithdraw > totalMoneyATM) {
            alert('Fondos insuficientes')
        } else {
            const withdrawATM = {};
            let remainingMoney = moneyToWithdraw;
            ATM.sort((a,b) => b.amount - a.amount);
            console.log(`Cajero re-ordenado`);
            console.log(ATM);
            ATM.forEach(pair => {
                const currentAmount = pair.amount;
                const quantityAvailable = pair.quantity;
                if (remainingMoney >= currentAmount && quantityAvailable > 0) {
                    const quantityDelivered = Math.floor(remainingMoney / currentAmount);
                    const quantityWithdraw = Math.min(quantityDelivered, quantityAvailable);
                    remainingMoney -= currentAmount * quantityWithdraw;
                    pair.quantity -= quantityWithdraw;
                    withdrawATM[currentAmount] = quantityWithdraw;
                }
            });
            if (remainingMoney === 0) {
                console.log(`La cantidad retirada es: $${moneyToWithdraw}`);
                console.log('En billetes de:');
                Object.keys(withdrawATM).forEach(amount => {
                    const quantity = withdrawATM[amount];
                    console.log(`${quantity} billete(s) de $${amount}`);
                })
            } else {
                console.log('La cantidad solicitada no se puede retirar');
                alert('La cantidad solicitada no se puede retirar');
            }
        }
    } else {
        alert('Cajero en mantenimiento, vuelva pronto');
        login();
    }
}

const printBills = () => {
    console.log('El cajero tiene disponible');
    ATM.forEach(pair => {
        console.log(`${pair.quantity} billete(s) de $${pair.amount}`);
    })
}

login();


