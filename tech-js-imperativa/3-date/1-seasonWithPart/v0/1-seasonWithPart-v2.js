const { Console } = require("console-mpds");
const console = new Console();
//// --------------------------------------------/
/// <Autor: Manuel Rosendo Castro Iglesias.>
/// <Autor: Alberto Antelo>
// ### 1-seasonWithPart/v0
// Da error con fechas fuera de rango, tengo que corregirlo.
// Una vez esté terminado se eliminarán comentarios innecesarios.
/// --------------------------------------------/


/// TODO: yearNow * Falta verificar dia y mes actual *;

const yearNow = 2022 // para verificar aún falta llegar a funciones de fecha y hora.
//tienes que declarar lo de abajo con let, sino no te deja luego guardar los datos, estan declaradas como constantes
let day = 1;
let month = 1;
let year =1;

	// No es necesario añadir " + " para forzar tipo ya que solo acepta enteros
	// ¡Y esta reforzada la reescritura de const
	// Si este comportamiento cambia en el futuro será neesario ver posible solución.
do{
	day = console.readNumber( 'Escriba un día (1-30): ' );}
while ( day < 1 || day >= 30 );    // ¿Añadir verificación dias 31 o 28/29? ¡Interesante!
do{
	month = console.readNumber( 'Escriba un mes (1-12): ' );}
while ( month < 1 || month > 12 ); // TODO: nameOfTheMonth, ¿crear método Nombres del mes?
do{
	year = console.readNumber( 'Escriba un año (… … … …): ' );}
while ( year < 1 || year > yearNow );


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

// Ahora que seta verificado le quito toda la sangria para el profe LÑuius. :)