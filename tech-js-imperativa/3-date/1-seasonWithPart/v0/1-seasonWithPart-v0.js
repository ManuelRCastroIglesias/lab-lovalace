
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


const EarlyTxt   = " cae a principios";
const MiddleTxt = " cae a mediados";
const LateTxt    = " cae a finales";

const winter = " del Invierno";
const spring = " de la Primavera";
const summer = " del Verano";
const autumn = " del Otoño";

const my =
	month ===  1 ? (day < 21 ? EarlyTxt  + winter : MiddleTxt + winter):
	month ===  2 ? (day < 21 ? MiddleTxt + winter : LateTxt   + winter):
	month ===  3 ? (day < 21 ? LateTxt   + winter : EarlyTxt  + spring):
	month ===  4 ? (day < 21 ? EarlyTxt  + spring : MiddleTxt + spring):
	month ===  5 ? (day < 21 ? MiddleTxt + spring : LateTxt   + spring):
	month ===  6 ? (day < 21 ? LateTxt   + spring : EarlyTxt  + summer):
	month ===  7 ? (day < 21 ? EarlyTxt  + summer : MiddleTxt + summer):
	month ===  8 ? (day < 21 ? MiddleTxt + summer : LateTxt   + summer):
	month ===  9 ? (day < 21 ? LateTxt   + summer : EarlyTxt  + autumn):
	month === 10 ? (day < 21 ? EarlyTxt  + autumn : MiddleTxt + autumn):
	month === 11 ? (day < 21 ? MiddleTxt + autumn : LateTxt   + autumn):
	month === 12 ?             LateTxt   + autumn : EarlyTxt  + winter ;

console.writeln(`El día ${day} del ${month} del año ${year}/${my}.`);

//    MiddleTxt + autumn :