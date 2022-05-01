const { Console } = require( "console-mpds" );
const console = new Console();
// --------------------------------------------/
/// Autor: Manuel Rosendo Castro Iglesias.
// Se consideran todos los meses de 30 días.
// ### 3-date/2-previus
const day = console.readNumber( 'Escriba el dia ( 1-30): ' );
const month = console.readNumber( 'Escriba el mes ( 1-12): ' );
const year = console.readNumber( 'Escriba el año (01-99): ' );
const daySmallvalue = day < 1;            // false
const monthSmallvalue = month < 1;        // false
const yearSmallvalue = year - 1 < 1;      // false
const monthLargeValue = month > 12;       // false
const dayLargeValue = day > 30;           // false
const yearLargeValue = year > 99;         // false
const dateValid = daySmallvalue === monthSmallvalue === yearSmallvalue === dayLargeValue === monthLargeValue === yearLargeValue; /* sirve como prueba */
// ¡No sé como hacerlo sin Let! Me rindo.
let dayPreviusSmall = day;
let monthPreviusSmall = month;
let yearPreviusSmall = year;

// Lógica -- datePrevius --
( month === day === year === 1 ) ?
	yearPreviusSmall = year - 1 :
	( month === day === 1 ?
		dayPreviusSmall = month - 1 :
		( day === 1 ) ?
			monthPreviusSmall = day + 29 :
				dayPreviusSmall = day - 1 );

const myDate = dateValid ?
	console.writeln( `La fecha ` + day + `/` + month + `/` + year + ` y la anterior fecha es ` + dayPreviusSmall + `/` + monthPreviusSmall + `/` + yearPreviusSmall ) :
	console.writeln( `La fecha ` + day + `/` + month + `/` + year + ` No puedo hacer ese Cálculo o la fecha no es válida` );
console.writeln( `La fecha ` + day + `/` + month + `/` + year + ` No puedo hacer ese Cálculo o la fecha no es válida` );

// console.readString('text');