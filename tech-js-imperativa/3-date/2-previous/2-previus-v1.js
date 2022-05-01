const { Console } = require("console-mpds");
const console = new Console();
// --------------------------------------------/
/// Autor: Manuel Rosendo Castro Iglesias.
/// Autora: María Paz López.
/// ### 3-date/2-previus
/// Existe un error en los cálculos.
// Se consideran todos los meses de 30 días.

let dateDay   = + console.readNumber ( 'Escriba el dia ( 1-30): ' );
let dateMonth = + console.readNumber ( 'Escriba el mes ( 1-12): ' );
let dateYear  = + console.readNumber ( 'Escriba el año (01-99): ' );

/*// // Lógica -- datePrevius -- ¡Esta lógica no es válida! (switch nueva lógica)
const daySmallvalue    = (1 * dateDay  )     <= 1;     // false
const monthSmallvalue  = (1 * dateMonth)     <= 1;     // false
const yearSmallvalue   = (1 * dateYear ) - 1  < 1;     // false
const monthLargeValue  = (1 * dateMonth)     > 12;     // false
const dayLargeValue    = (1 * dateDay  )     > 30;     // false
const yearLargeValue   = (1 * dateYear )     > 99;     // false

const dateValid =
	daySmallvalue ===
	monthSmallvalue ===
	yearSmallvalue ===
	dayLargeValue ===
	monthLargeValue ===
	yearLargeValue;

// ¡No sé como hacerlo sin Let! Me rindo.
let dayPreviusSmall = dateDay;
let monthPreviusSmall = dateMonth;
let yearPreviusSmall = dateYear;


( dateMonth === dateDay === dateYear === 1 ) ?
	yearPreviusSmall = dateYear - 1 :
	( dateMonth === dateDay === 1 ?
		( monthPreviusSmall = dateMonth - 1 ) :
		( dateDay === 1 ) ?
			dayPreviusSmall = dateDay + 29 :
			dayPreviusSmall = dateDay - 1 );

/*/ // Nueva lógica.

let dateValid = true;
let previusYear = 1;
let previusMonth = 1;
let previusDay = 1;

// Check if the date is the New Year’s Day or is a invalid date (01/01/01).
	// The first New Year’s Day d.C.
	// New Year’s Day
	// The first day of the Month
	// On any other day.

if ( dateYear === dateMonth === dateDay === 1 )
{
	dateValid = false;
}
if ( dateMonth === dateDay === 1 );
	{
		previusYear = dateYear - 1;
		previusMonth = dateMonth - 1;
		previusDay + 29;
	}
if ( dateDay === 1 )
{
	previusMonth = dateMonth - 1;
	previusDay + 29;
}
else if ( dateDay !== 1 )
{
	previusDay - 1;
};


//( 1 !== dateYear ) ? previusYear = dateYear : dateValid = false ;

//	// Check if the date is the first of the Month or is New Year’s Day.
//(1 === dateMonth ) ? previusMonth  - 1 : previusMonth = dateMonth * 1 ;

//	// Check if the date is the first of the Month or it's not.
//(1 === dateDay   ) ? previusDay   + 29 : previusDay   = dateDay   - 1 ;


//*/

(dateValid === true) ?
	console.writeln( `La fecha ${ dateDay }/${ dateMonth }/${ dateYear } y la fecha anterior es ${ previusDay }/${ previusMonth }/${ previusYear }.` ) :

	console.writeln( `La fecha ` + dateDay + `/` + dateMonth + `/` + dateYear + ` No puedo hacer ese Cálculo o la fecha no es válida` );

//*// // Codigo Refactoring for searh logic error.

console.writeln();
console.writeln( dateValid);
console.writeln();
console.writeln( dateDay );
console.writeln( dateMonth );
console.writeln( dateYear );
console.writeln();
console.writeln( previusDay );
console.writeln( previusMonth );
console.writeln( previusYear );
console.writeln();

//*/
