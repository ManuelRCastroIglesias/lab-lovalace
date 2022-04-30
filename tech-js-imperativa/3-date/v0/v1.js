const { Console } = require("console-mpds");
const console = new Console();
// --------------------------------------------/
/// Autor: Manuel Rosendo Castro Iglesias.
/// Autora: María Paz López.
/// Un ejercicio de lo más divertido.
/// ### 1-seasonWithPart/v0
/// Hemos utilizado de todo: Ternario, While, Switch, 
/// y esperamos a poner los nombres de los días y los meses
/// para usar el Arrays, For y Do-While.

/// OJO:  Hay un error aún, pero estoy cansado. Mañana sigo.
/// OJO:  No hacer cambios importantes cuando estas cansado.
/// OJO:  ¡Por poco la lio parda!

const yearNow = 2022;
let day = 1;
let month = 1;
let year = 0;
let mySeasonDay = "";
let mySeasonmonth = "";
let mySeasonYear = "";
let mySeasonText = "";
let myEasterEggs = false;
const TXT_EARLY = " cae a principios";
const TXT_MIDDLE = " cae a mediados";
const TXT_LATE = " cae a finales";
const TXT_WINTER = " del Invierno";
const TXT_SPRING = " de la Primavera";
const TXT_SUMMER = " del Verano";
const TXT_AUTUM = " del Otoño";

while (myEasterEggs === false) {

	day = console.readNumber('Escriba un día (1-30): ');
	month = console.readNumber('Escriba un mes (1-12): ');
	year = console.readNumber('Escriba un año (… … … …): ');

	if (day > 0) {
		if (day <= 31) {
			mySeasonDay = "El día " + day;
			myEasterEggs = true;
		}
		else {
			console.writeln("Error en día")
			myEasterEggs = false;
		}
	}
	// Por aquí hay un error. No cambia la bariable myEasterEggs
	if (month > 0) {
		if (month <= 12) {
			mySeasonmonth = " del mes " + month;
			myEasterEggs = true;
		}
		else {
			console.writeln("Error en mes")
			myEasterEggs = false;
		}
	}
	if (year > 0) {
		if (year <= yearNow) {
			mySeasonYear = " del año " + year;
			myEasterEggs = true;
		}
		else {
			console.writeln("Error en año")
			myEasterEggs = false;
		}
	}
}

switch (x = month) {
	case 1:
		mySeasonText = TXT_EARLY + TXT_WINTER;
		break;
	case 2:
		mySeasonText = TXT_MIDDLE + TXT_WINTER;
		break;
	case 3:
		mySeasonText = day < 21 ? TXT_LATE + TXT_WINTER : TXT_EARLY + TXT_SPRING;
		break;
	case 4:
		mySeasonText = TXT_EARLY + TXT_SPRING;
		break;
	case 5:
		mySeasonText = TXT_MIDDLE + TXT_SPRING;
		break;
	case 6:
		mySeasonText = day < 21 ? TXT_LATE + TXT_SPRING : TXT_EARLY + TXT_SUMMER;
		break;
	case 7:
		mySeasonText = TXT_EARLY + TXT_SUMMER;
		break;
	case 8:
		mySeasonText = TXT_MIDDLE + TXT_SUMMER;
		break;
	case 9:
		mySeasonText = day < 21 ? TXT_LATE + TXT_SUMMER : TXT_EARLY + TXT_AUTUM;
		break;
	case 10:
		mySeasonText = TXT_EARLY + TXT_AUTUM;
		break;
	case 11:
		mySeasonText = TXT_MIDDLE + TXT_AUTUM;
		break;
	case 12:
		mySeasonText = day < 21 ? TXT_LATE + TXT_SUMMER : TXT_LATE + TXT_WINTER;
		break;
	default:
		console.writeln("exceptionCoitusInterruptus"); // My Easter Eggs
}

console.writeln(mySeasonDay + mySeasonmonth + mySeasonYear + mySeasonText + ".");



// No me gusta esto de las llaves que abren en línea, pero parece que en JavaScript es la norma.
// Ciclo While para solo permitir introducir fechas válidas. Ver TODO: yearNow.
// Del usuario nunca me fío, ni nunca lo haré, ¡NO INSISTAN! 
//	E incluso verificaría si intenta escribir la fecha como texto,
//		pero de eso ya se encarga console.readNumber() ¡Gracias profe!
//
// TODO: nameOfTheYear * método Nombres del año ¿Método cantidad en letra?*
// TODO: mySeason_month * nameOfThemonth * método Nombres del mes *
// TODO: yearNow * Falta obtener dia y mes actual *

