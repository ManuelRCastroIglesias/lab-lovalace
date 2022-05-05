
   //// ------------------------------------------------------------------//
		const { Console } = require("console-mpds");                      //
		const console = new Console();                                    //
{  //// ------------------------------------------------------------------//
	/// <Autor: Manuel Rosendo Castro Iglesias.>                          //
	/// <Autor: Alberto Antelo>                                           //
	/// <Titulo: ### 1-seasonWithPart/v0/ >                               //
	/// ------------------------------------------------------------------//
}   /// Créditos:

const yearNow = 2022 
let myDay = 1;
let month = 1;
let annum =1;
/// ----------------------------------------------------------------------//
do{
	myDay = console.readNumber( 'Escriba un día (1-30): ' );}
while ( myDay < 1 || myDay >= 30 );
do {
	console.writeln();
	month = console.readNumber( 'Escriba un mes (1-12): ' );}
while ( month < 1 || month > 12 );
do {
	console.writeln();
	annum = console.readNumber( 'Escriba un año (… … … …): ' );}
while (annum < 1 || annum > yearNow);
	console.writeln();
/// ----------------------------------------------------------------------//
const EARLIE = " cae a principios";
const MIDDLE = " cae a mediados";
const LATEST = " cae a finales";
const WINTER = " del Invierno";
const SPRING = " de la Primavera";
const SUMMER = " del Verano";
const AUTUMN = " del Otoño";
/// ----------------------------------------------------------------------//
const seassonPart =
	month === 01 ? (myDay < 21 ? EARLIE + WINTER : MIDDLE + WINTER):
	month === 02 ? (myDay < 21 ? MIDDLE + WINTER : LATEST + WINTER):
	month === 03 ? (myDay < 21 ? LATEST + WINTER : EARLIE + SPRING):
	month === 04 ? (myDay < 21 ? EARLIE + SPRING : MIDDLE + SPRING):
	month === 05 ? (myDay < 21 ? MIDDLE + SPRING : LATEST + SPRING):
	month === 06 ? (myDay < 21 ? LATEST + SPRING : EARLIE + SUMMER):
	month === 07 ? (myDay < 21 ? EARLIE + SUMMER : MIDDLE + SUMMER):
	month === 08 ? (myDay < 21 ? MIDDLE + SUMMER : LATEST + SUMMER):
	month === 09 ? (myDay < 21 ? LATEST + SUMMER : EARLIE + AUTUMN):
	month === 10 ? (myDay < 21 ? EARLIE + AUTUMN : MIDDLE + AUTUMN):
	month === 11 ? (myDay < 21 ? MIDDLE + AUTUMN : LATEST + AUTUMN):
	month === 12 ? /*       */ LATEST + AUTUMN : EARLIE + WINTER;
/// ----------------------------------------------------------------------//
console.writeln(`\tEl día ${myDay} del ${month} del año ${annum}${seassonPart}.`);
/// ----------------------------------------------------------------------//
