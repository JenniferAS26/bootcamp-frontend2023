let grade = prompt('Digite su nota');

if (grade <= 3) {
    console.log('Su nota es muy deficiente');
} else if (grade < 5) {
    console.log('Su nota es insuficiente');
} else if (grade < 6) {
    console.log('Su nota es suficiente');
} else if (grade < 7) {
    console.log('Su nota es bien');
} else if (grade < 9) {
    console.log('Su nota es notable');
} else if (grade >= 9) {
    console.log('Su nota es sobresaliente');
}