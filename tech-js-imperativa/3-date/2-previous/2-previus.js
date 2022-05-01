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

const daySmallvalue = day > 1;            // false
console.writeln(daySmallvalue);
const monthSmallvalue = month > 1;            // false
console.writeln(monthSmallvalue);

const yearSmallvalue = year > 1;            // false, esto evita el año 0
console.writeln(yearSmallvalue);

const dayLargeValue = day < 31;            // false
console.writeln(daySmallvalue);

const monthLargeValue = month < 13;            // false
console.writeln(monthSmallvalue);

const yearLargeValue = year < 100;            // false
console.writeln(yearSmallvalue);


const dateInvalid = (daySmallvalue === monthSmallvalue === yearSmallvalue === dayLargeValue === monthLargeValue === yearLargeValue); /* sirve como prueba */

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
		yearPreviusSmall = year - 1;
	}; // en otro caso llamar a método captura datos, return, o GOTO;
	if (month !== 1)
	{
		if (day === 1)
		{
			dayPreviusSmall = day + 29; monthPreviusSmall = month - 1;
		}
		else
		{
			if (day !== 1) { dayPreviusSmall = day - 1;};
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

console.writeln(dateInvalid);
//if (dateInvalid === false)
//	{
//		console.writeln(`La fecha ` + day + `/` + month + `/` + year + ` 
//						y la anterior fecha es ` + dayPreviusSmall + `/` + monthPreviusSmall + `/` + yearPreviusSmall);
//}
//else ( console.writeln(`La fecha `+day+`/`+month+`/`+year+` No puedo hacer ese Cálculo o la fecha no es válida`) )

// console.readString('text');
