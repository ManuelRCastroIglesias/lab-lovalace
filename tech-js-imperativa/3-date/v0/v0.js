const { Console } = require("console-mpds");

const console = new Console();

// ### 1-seasonWithPart/v0

// TODO: yearNow * Falta verificar dia y mes actual *
const yearNow =2022;

const day   = console.readNumber ('Escriba un día (1-30): ');
const month = console.readNumber ('Escriba un mes (1-12): ');
const year  = console.readNumber ('Escriba un año (… … … …): '); 

// TODO: mySeasons      * Crear bucle reintento con valores false *
const mySeason_Day   = 	day   > 0 ? (day   <= 31      ? "El día " + day   : false ) : false ;
// TODO: mySeason_Month * Si hay que nombrar el mes corregir el texto *
// TODO: nameOfTheMonth * método Nombres del mes *
const mySeason_Month = month > 0 ? (month <= 12      ? " del mes " + month : false ) : false ;
// TODO: mySeason_Year  * Si hay que nombrar el año corregir el texto *
// TODO: nameOfTheYear  * método Nombres del año ¿Método cantidad en letra?*
const mySeason_Year  = year  > 0 ? (year  <= yearNow ? " del año " + year  : false ) : false ;

const aboutEarly_Text = " cae a principios";
const aboutMiddleText = " cae a mediados";
const aboutLate__Text = " cae a finales";

const winterSeasonText = " del Invierno";
const springSeasonText = " de la Primavera";
const summerSeasonText = " del Verano";
const autumnSeasonText = " del Otoño";

const mySeasonText = 
		 month ===  1 ?  aboutEarly_Text + winterSeasonText: 
		 month ===  2 ?  aboutMiddleText + winterSeasonText: 
		 month ===  3 ?  
			(day < 21 ? aboutLate__Text + winterSeasonText : aboutEarly_Text + springSeasonText):
		 month ===  4 ?  aboutEarly_Text + springSeasonText: 
		 month ===  5 ?  aboutMiddleText + springSeasonText: 
		 month ===  6 ?  
			(day < 21 ? aboutLate__Text + springSeasonText : aboutEarly_Text + summerSeasonText):
		 month ===  7 ?  aboutEarly_Text + summerSeasonText: 
		 month ===  8 ?  aboutMiddleText + summerSeasonText: 
		 month ===  9 ?  
			(day < 21 ? aboutLate__Text + summerSeasonText : aboutEarly_Text + autumnSeasonText):
		 month === 10 ?  aboutEarly_Text + autumnSeasonText: 
		 month === 11 ?  aboutMiddleText + autumnSeasonText: 
			(day < 21 ? aboutLate__Text + summerSeasonText : abouteLate_Text + winterSeasonText);

console.writeln(mySeason_Day+mySeason_Month+mySeason_Year+mySeasonText+".");


						