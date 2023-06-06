/**
 * Cajero electrónico con JavaScript
 * OBJETIVO: Simular el trabajo de un cajero electrónico usando lo aprendido en JavaScript
 * El aplicativo debe cumplir los siguientes requerimientos técnicos:
 * 1.   Escribir una lista de usuarios con los siguientes datos: nombre, numero de documento, contraseña y tipo de usario. El tipor de usuario será: 1- administrador, 2- cliente. Guardal en un array de objetos.
 * 2.   Realizar un programa que al inicio solicite ingresar documento y contraseña, si el usuario no existe debe indicar que no existe y volver a preguntar usuario y contraseña, si el usuario es administrador debe permitir cargar el cajero de la siguiente manera
 * 3.   Solicitar la cantidad de billetes de 5, 10, 20, 50 y 100 mil pesos COP
 * 4.   Almacenar esta información en un array de objetos.
 * 5.   Una vez tenga la información, debe mostrar en consola la suma por cada denominación y el total general.
 * 6.   Una vez el cajero esté cargado, debe volver a solicitar usuario y contraseña, si es administrador, se repite el mismo proceso, sumar a la cantidad actual, si es cliente debe proseguir de la siguiente manera:
 * 7.   Si el cajero no tiene dinero cargado, debe aparecer un mensaje en consola: "Cajero en mantenimiento, vuelva pronto." Y reiniciar desde el inicio.
 * 8.   Si el dinero ya tiene dinero cargado, debe preguntar la cantidad deseada a retirar. Una vez obtenida esta información, debe indicar cuanto dinero puede entregar basado en la cantidad disponible y los tipos de billetes. Luego debe mostrar en consola cuando billetes de cada denominación entregó. Priorizando siempre las denominaciones más altas para valores altos y redondeando a la cifra más cercana menor a la solicitada
 * 9.   Posteriormente, debe aparecer en consola, el dinero restante en el cajero por cada denominación
 */

const userList = [
    {
        name: 'Calos Montoya',
        noDocument: 111111,
        password: 0000,
        typeUsr: 'admin'
    },
    {
        name: 'Andres Lopez',
        noDocument: 222222,
        password: 0000,
        typeUsr: 'client'
    },
    {
        name: 'Valeria Aguirre',
        noDocument: 333333,
        password: 0000,
        typeUsr: 'client'
    },
    {
        name: 'Sandra Lopez',
        noDocument: 444444,
        password: 0000,
        typeUsr: 'admin'
    },
]

const doc = 111111;
const psw = 0000

