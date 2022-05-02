const { Console } = require("console-mpds");
const console = new Console();
// --------------------------------------------/
/// Autor: Manuel Rosendo Castro Iglesias.
// ### 1-seasonWithPart/v0
// TODO: yearNow * Falta verificar dia y mes actual *

const yearNow =2022;

const day = console.readNumber ('Escriba un día (1-30): ');
const month = console.readNumber ('Escriba un mes (1-12): ');
const year = console.readNumber ('Escriba un año (… … … …): '); 

// TODO: mySeasons * Crear bucle reintento con valores false *
const myDay = day > 0 ? (day <= 31 ? "El día " + day : false ) : false ;
// TODO: mySeasonMonth * Si hay que nombrar el mes, corregir el texto *
// TODO: nameOfTheMonth * método Nombres del mes  ¿Método cantidad en letra?*
const myMonth = month > 0 ? (month <= 12 ? " del mes " + month : false ) : false ;
// TODO: mySeasonYear * Si hay que nombrar el año, corregir el texto *
// TODO: nameOfTheYear * método Nombres del año ¿Método cantidad en letra?*
const myYear = year > 0 ? (year <= yearNow ? " del año " + year : false ) : false ;

const Early = " cae a principios";
const Middle = " cae a mediados";
const Late = " cae a finales";

const winter = " del Invierno";
const spring = " de la Primavera";
const summer = " del Verano";
const autumn = " del Otoño";
// TODO: Crear array en cuanto se pueda.
const mySeason =
month === 1 ? ( day < 21 ? Early + winterTxt : Middle + winter ) :
month === 2 ?( day < 21 ? Middle + winterTxt : Late + winter ) :
month === 3 ?( day < 21 ? Late + winterTxt : Early + spring ) :
month === 4 ?( day < 21 ? Early + springTxt : Middle + spring ) :
month === 5 ?( day < 21 ? Middle + springTxt : Late + spring ) :
month === 6 ?( day < 21 ? Late + springTxt : Early + summer ) :
month === 7 ?( day < 21 ? Early + summerTxt : Middle + summer ) :
month === 8 ?( day < 21 ? Middle + summerTxt : Late + summer ) :
month === 9 ?( day < 21 ? Late + summerTxt : Early + autumn ) :
month === 10 ?( day < 21 ? Early + autumnTxt : Middle + autumn ) :
month === 11 ?( day < 21 ? Middle + autumnTxt : Late + autumn ) :
( day < 21 ? Late + autumnTxt : Early + winter );

console.writeln( `${ myDay }${ myMonth }${ myYear }${ mySeason }.` );

console.writeln();