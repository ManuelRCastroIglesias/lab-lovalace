const { Console } = require("console-mpds");
const console = new Console();
// --------------------------------------------/
/// Autor: Manuel Rosendo Castro Iglesias.
/// Autora: María Paz López.
/// ### 3-date/2-previus
/// Existe un error en los cálculos.

// Se consideran todos los meses de 30 días.

const day   = +console.readNumber('Escriba el dia ( 1-30): ');
const month = +console.readNumber('Escriba el mes ( 1-12): ');
const year  = +console.readNumber('Escriba el año (01-99): ');

const daySmallValue = day-1 >= 1 ;            // true
const monthSmallValue = month-1 >= 1 ;            // true
const yearSmallValue = year-1 >= 1 ;            // true, esto evita el año 0
const dayLargeValue = day <= 30 ;            // true
const monthLargeValue = month <= 12 ;            // true
const yearLargeValue = year <= 99 ;            // true

let dateValid = !(daySmallValue === monthSmallValue === yearSmallValue === dayLargeValue === monthLargeValue === yearLargeValue); /* sirve como prueba */

// ¡No sé como hacerlo sin Let! Me rindo.
let dayPreviusSmall = day;    
let monthPreviusSmall = month;
let yearPreviusSmall = year;  

// Lógica -- datePrevius --
//*//

if ( !( year === month === day === 1 ) )
{
	if (year - 1 > 0 )
	{
		if (day === month === 1)
		{
			yearPreviusSmall = year - 1;
			dateValid = true;
		};

	}; // en otro caso llamar a método captura datos, return, o GOTO;
	if (month !== 1)
	{
		if (day === 1)
		{
			dayPreviusSmall = day + 29; monthPreviusSmall = month - 1;
			dateValid = true;
		}
		else
		{
			if (day !== 1) { dayPreviusSmall = day - 1; };
			dateValid = true;
		};
	};
};

/*/
!(month === day === year === 1) ?                 
	yearPreviusSmall = year-1:                    
	!(month === day === 1 ?                       
			dayPreviusSmall = month-1 :           
				(day === 1) ?					  
					monthPreviusSmall = day+29 :  
			dayPreviusSmall = day - 1);
//*/

//console.writeln();
//console.writeln(dateValid);
//console.writeln();
if (dateValid === true) {
	console.writeln(`La fecha ` + day + `/` + month + `/` + year + ` y la anterior fecha es ` + dayPreviusSmall + `/` + monthPreviusSmall + `/` + yearPreviusSmall);
}
else (console.writeln(`La fecha ` + day + `/` + month + `/` + year + ` No puedo hacer ese Cálculo o la fecha no es válida`));

// console.readString('text');
