
///// --------------------------------------------------------------------//
		const { Console } = require("console-mpds");                      //
		const console = new Console();                                    //
{//// --------------------------------------------------------------------//
	/// <Autor: Manuel Rosendo Castro Iglesias.>                          //
	/// <Autor: Alberto Antelo>                                           //
	/// <Titulo: ### 1-seasonWithPart/v0/ >                               //
	/// ------------------------------------------------------------------//
} // Créditos:

const yearNow = 2022 
let day = 1;
let month = 1;
let year =1;

do{
	day = console.readNumber( 'Escriba un día (1-30): ' );}
while ( day < 1 || day >= 30 );
do {
	console.writeln();
	month = console.readNumber( 'Escriba un mes (1-12): ' );}
while ( month < 1 || month > 12 );
do {
	console.writeln();
	year = console.readNumber( 'Escriba un año (… … … …): ' );}
while (year < 1 || year > yearNow);
	console.writeln();


const aboutEarlyTxt   = " cae a principios";
const aboutMiddleTxt = " cae a mediados";
const aboutLateTxt    = " cae a finales";

const winterSeasonTxt = " del Invierno";
const springSeasonTxt = " de la Primavera";
const summerSeasonTxt = " del Verano";
const autumnSeasonTxt = " del Otoño";

const mySeasonTxt =
	month ===  1 ?  aboutEarlyTxt + winterSeasonTxt :
	month ===  2 ?  aboutMiddleTxt + winterSeasonTxt :
	month ===  3 ? (day < 21 ?
				    aboutLateTxt + winterSeasonTxt :
				    aboutEarlyTxt + springSeasonTxt) :
	month ===  4 ?  aboutEarlyTxt + springSeasonTxt :
	month ===  5 ?  aboutMiddleTxt + springSeasonTxt :
	month ===  6 ? (day < 21 ? aboutLateTxt + springSeasonTxt :
					aboutEarlyTxt + summerSeasonTxt) :
	month ===  7 ?  aboutEarlyTxt + summerSeasonTxt :
	month ===  8 ?  aboutMiddleTxt + summerSeasonTxt :
	month === 9 ? (day < 21 ?
					aboutLateTxt + summerSeasonTxt :
					aboutEarlyTxt + autumnSeasonTxt) :
	month === 10 ?  aboutEarlyTxt + autumnSeasonTxt :
	month === 11 ?  aboutMiddleTxt + autumnSeasonTxt :
		(day < 21 ? aboutLateTxt + autumnSeasonTxt :
					aboutEarlyTxt + winterSeasonTxt);

console.writeln(`El día ${day} del ${month} del año ${year}/${mySeasonTxt}.`);
