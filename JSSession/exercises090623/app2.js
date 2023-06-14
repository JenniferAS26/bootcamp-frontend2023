/**
 * Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rapida cuanto le costara en funcion del topping que elija
 * - El helado sin topping 1900
 * - El toppin de oreo cuesta 1000
 * - El toppin de KitKat cuesta 1500
 * - El toppin de Brownie cuesta 750
 * - El toppin de cuesta Lacasito 950
 * En caso de no disponer del topping solicitado por el usuario el programa escribira por pantalla no "tenemos este topping, lo sentimos" y a continuacion informar el precio del helado sin el topping
 */


const basicIceCream = 1900;
const oreoTopping = 1000;
const kitkatTopping = 1500;
const brownieTopping = 750;
const lacasitoTopping = 950;

let totalPrice = 0;

let iceCream = 'si';

if (iceCream === 'si') {
    let userTopping = 'kitkat';
    if (userTopping === 'oreo') {
        totalPrice = basicIceCream + oreoTopping;
        console.log(`El precio de su helado es ${totalPrice}`);
    } else if (userTopping === 'kitkat') {
        totalPrice = basicIceCream + kitkatTopping;
        console.log(`El precio de su helado es ${totalPrice}`);
    } else if (userTopping === 'brownie') {
        totalPrice = basicIceCream + brownieTopping;
        console.log(`El precio de su helado es ${totalPrice}`);
    } else if (userTopping === 'lacasito') {
        totalPrice = basicIceCream + lacasitoTopping;
        console.log(`El precio de su helado es ${totalPrice}`);
    } else {
        totalPrice = basicIceCream;
        console.log(`No tenemos ese topping, lo sentimos. El precio de su helado es ${totalPrice}`);
    }
} else {
    console.log("Vuelva pronto");
}