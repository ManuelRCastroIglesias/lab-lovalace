const { Console } = require("console-mpds");
const console = new Console();
/// --------------------------------------------/
/// Autor: Manuel Rosendo Castro Iglesias.
// ### 1-seasonWithPart/v0

// TODO: yearNow * Falta verificar dia y mes actual *
const yearNow = 2022;
let day;
let mySeasonDay;

// TODO: mySeasons      * Crear bucle reintento con valores false *
do
{
	if ( mySeasonDay === false )
	{
		let txtError = "Escribió un día no válido";
		day = console.readNumber( `${ txtError }\n Escriba un día (1-30): ` );
	}
	mySeasonDay = day > 0
		? ( day <= 31 ? "El día " + day : false )
		: false;
}
while ( mySeasonDay === false );

// TODO: mySeasonMonth * Si hay que nombrar el mes corregir el texto *
// TODO: nameOfTheMonth * método Nombres del mes *
const month = console.readNumber ('Escriba un mes (1-12): ');
const mySeasonMonth = month > 0 ? ( month <= 12 ? " del mes " + month : false ) : false;

// TODO: mySeasonYear  * Si hay que nombrar el año corregir el texto *
// TODO: nameOfTheYear  * método Nombres del año ¿Método cantidad en letra?*
const year  = console.readNumber ('Escriba un año (… … … …): '); 
const mySeasonYear  = year  > 0 ? (year  <= yearNow ? " del año " + year  : false ) : false ;

const aboutEarlyText = " cae a principios";
const aboutMiddleText = " cae a mediados";
const aboutLateText = " cae a finales";

const winterSeasonText = " del Invierno";
const springSeasonText = " de la Primavera";
const summerSeasonText = " del Verano";
const autumnSeasonText = " del Otoño";

const mySeasonText = 
		 month ===  1 ?  aboutEarlyText + winterSeasonText: 
		 month ===  2 ?  aboutMiddleText + winterSeasonText: 
		 month ===  3 ?  
			(day < 21 ? aboutLateText + winterSeasonText : aboutEarlyText + springSeasonText):
		 month ===  4 ?  aboutEarlyText + springSeasonText: 
		 month ===  5 ?  aboutMiddleText + springSeasonText: 
		 month ===  6 ?  
			(day < 21 ? aboutLateText + springSeasonText : aboutEarlyText + summerSeasonText):
		 month ===  7 ?  aboutEarlyText + summerSeasonText: 
		 month ===  8 ?  aboutMiddleText + summerSeasonText: 
		 month ===  9 ?  
			(day < 21 ? aboutLateText + summerSeasonText : aboutEarlyText + autumnSeasonText):
		 month === 10 ?  aboutEarlyText + autumnSeasonText: 
		 month === 11 ?  aboutMiddleText + autumnSeasonText: 
			(day < 21 ? aboutLateText + summerSeasonText : abouteLateText + winterSeasonText);

console.writeln(mySeasonDay+mySeasonMonth+mySeasonYear+mySeasonText+".");

