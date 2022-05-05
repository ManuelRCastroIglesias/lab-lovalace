const { Console } = require("console-mpds");
const console = new Console();
/// --------------------------------------------/
/// Autor: Manuel Rosendo Castro Iglesias.
/// <Title: ### 3-date/0-valid>
/// Se consideran todos los meses de 30 días.
/// --------------------------------------------/
/// Hace falta aún refactorizar más.
/// --------------------------------------------/

let day = 1;
do {
    day = console.readNumber('Escriba el dia (1-30):  ');
} while (day < 1 || day > 30);
let month = 1;
do {
    month = console.readNumber('Escriba el mes (1-12):  ');
} while (month < 1 || month > 12);
let year = 1;
do {
    year = console.readNumber('Escriba el año (01-99):  ');
} while (year < 1 || year > 99);
console.writeln();


const daySmallvalue = day <1 ; // false
const dayLargeValue = day >30 ; // false
const monthSmallvalue = month <1 ; // false
const monthLargeValue = month >12 ; // false
const yearSmallvalue = year <0 ; // false
const yearLargeValue = year >99 ; // false
/* con la misma lógica se pueden calcular otros valores. */

const dateValid =
    daySmallvalue ===
    dayLargeValue ===
    monthSmallvalue ===
    monthLargeValue ===
    yearSmallvalue ===
    yearLargeValue;
/* sirve como prueba */


dateValid ?
    console.writeln( `La fecha ${ day }/${ month }/${ year } sí es una fecha válida` ) :
    console.writeln( `La fecha ${ day }/${ month }/${ year } no es una fecha válida` );
console.writeln();
