/**
 * EScribe un programa que pregunte al usuario si es culpable o no.
 * Asumiremos que:
 * - En caso afirmativo el usuario respondera si
 * - En casi contrario respondera no
 * - Si el usuario responde si se escribira por el documento "Iras a la carcel"
 * - Si el usuario responde no se escribira por el documento "iras a casa"
 * - En cualquier otro caso el documento web escribira "la documentacion por favor"
 * 
 */

let isGuilty = 'si';
// let isGuilty = prompt('¿Eres culpable?');

if (isGuilty.toLowerCase() === 'Si'.toLowerCase()) {
    console.log("Irás a la cárcel");
} else if (isGuilty.toLowerCase() === 'No'.toLowerCase()) {
    console.log("Irás a casa");
} else {
    console.log("La documentaión por favor");
}