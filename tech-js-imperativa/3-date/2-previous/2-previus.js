const { Console } = require("console-mpds");
const console = new Console();
// --------------------------------------------/
/// Autor: Manuel Rosendo Castro Iglesias.
/// Autora: María Paz López.
/// ### 3-date/2-previus
/// Existe un error en los cálculos.

// Se consideran todos los meses de 30 días.

let  day   = console.readNumber('Escriba el dia ( 1-30): ');
let  month = console.readNumber('Escriba el mes ( 1-12): ');
let  year  = console.readNumber('Escriba el año (01-99): ');
let  daySmallvalue     =  day      <1   ;            // false
let  monthSmallvalue   =  month    <1   ;            // false
let  yearSmallvalue    =  year  -1 <1   ;            // false, esto evita el año 0
let  monthLargeValue   =  month    >12  ;            // false
let  dayLargeValue     =  day      >30  ;            // false
let  yearLargeValue    =  year     >99  ;            // false
let  dateValid = daySmallvalue === monthSmallvalue === yearSmallvalue === dayLargeValue === monthLargeValue === yearLargeValue; /* sirve como prueba */

// ¡No sé como hacerlo sin Let! Me rindo.
let dayPreviusSmall = day;    
let monthPreviusSmall = month;
let yearPreviusSmall = year;  

// Lógica -- datePrevius --


if (!(year === month === day === 1))
{
	yearPreviusSmall = year - 1;
	monthPreviusSmall = month - 1;
	dayPreviusSmall = day + 29;
}
else if (month === day === 1)
{
	dayPreviusSmall = day + 29 ;
	monthPreviusSmall = month + 11;
}
else if (day !== 1)
{
	dayPreviusSmall = day - 1;
}
else{
	ErrorInDate = true;
}






//!(year === month === day === 1) ?                 
//	yearPreviusSmall = year-1:                    
//	!(month === day === 1 ?                       
//			dayPreviusSmall = month-1 :           
//				(day === 1) ?					  
//					monthPreviusSmall = day+29 :  
//						dayPreviusSmall = day-1); 

//dateValid ? 
console.writeln(`La fecha ${day}/${month}/${year} y la anterior fecha es ${dayPreviusSmall}/${monthPreviusSmall}/${yearPreviusSmall}`);
//	console.writeln(`La fecha `+day+`/`+month+`/`+year+` No puedo hacer ese Cálculo o la fecha no es válida`);

// console.readString('text');
