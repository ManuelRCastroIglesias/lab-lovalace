const { Console } = require("console-mpds");
const console = new Console();
// --------------------------------------------/
/// Autor: Manuel Rosendo Castro Iglesias.
// Se consideran todos los meses de 30 días.
// ### 3-date/0-valid

const day = console.readNumber('Escriba el dia (1-30):  ');
const month = console.readNumber('Escriba el mes (1-12):  ');
const year = console.readNumber( 'Escriba el año (01-99):  ' );
console.writeln();

const daySmallvalue = day <1 ; // false
const dayLargeValue = day >30 ; // false
const monthSmallvalue = month <1 ; // false
const monthLargeValue = month >12 ; // false
const yearSmallvalue = year <0 ; // false
const yearLargeValue = year >99 ; // false
/* con la misma lógica se pueden cancelar otros valores. */

const dateValid = daySmallvalue === dayLargeValue === monthSmallvalue === monthLargeValue === yearSmallvalue === yearLargeValue; /* sirve como prueba */


const myDate = dateValid ? console.writeln(`La fecha `+day+`/`+month+`/`+year+` es una fecha válida`) : console.writeln(`La fecha `+day+`/`+month+`/`+year+` no es una fecha válida`);
