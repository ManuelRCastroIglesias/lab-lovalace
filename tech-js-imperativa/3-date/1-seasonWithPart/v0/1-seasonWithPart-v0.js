const { Console } = require("console-mpds");
const console = new Console();
/// --------------------------------------------/
/// <Autor:> Manuel Rosendo Castro Iglesias.

// ### 1-seasonWithPart/v0
// Da error con fechas fuera de rango, tengo que corregirlo.
// Una vez esté terminado se eliminarán comentarios innecesarios.
/// --------------------------------------------/


/// TODO: yearNow * Falta verificar dia y mes actual *;

const yearNow = 2022 // para verificar aún falta llegar a funciones de fecha y hora.

const day = 1;
const month = 1;
const year =1;

	// No es necesario añadir " + " para forzar tipo ya que solo acepta enteros
	// Si este comportamiento cambia en el futuro será neesario ver posible solución.
do
{
	day = console.readNumber( 'Escriba un día (1-30): ' );
}
while ( day <= 1 || day >= 30 );  // ¿Añadir verificación dias 31 o 28/29? ¡Interesante!
do
{
	month = console.readNumber( 'Escriba un mes (1-12): ' );
}
while ( mont <= 1 || month >= 30 ); // TODO: nameOfTheMonth, ¿crear método Nombres del mes?
do
{
	year = console.readNumber( 'Escriba un año (… … … …): ' );
}
while ( year <= 1 || year >= 30 );

	
const mySeasonDay = day <= 21 ? `emporada baja` : `Temprada alta`;

switch ( " mes " )
{
	case: 1;
		"x";
	case: 2;
		"x";
	case: 3;
		"x";
		return;
	case: 4;
		"x";
	case: 5;
		"x";
	case: 6;
		"x";
		return;
	case: 1;
		"x";
	case: 2;
		"x";
	case: 3;
		"x";
		return;
	case: 1;
		"x";
	case: 2;
		"x";
	case: 3;
		"x";
		return;
}


const mySeason_Month = month > 0 ? ( month <= 12 ? " del mes " + month : false ) : false;

const mySeason_Year = year > 0 ? ( year <= yearNow ? " del año " + year : false ) : false;

const aboutEarly_Text = " cae a principios";
const aboutMiddleText = " cae a mediados";
const aboutLate_Text = " cae a finales";

const winterSeasonText = " del Invierno";
const springSeasonText = " de la Primavera";
const summerSeasonText = " del Verano";
const autumnSeasonText = " del Otoño";

const mySeasonText = 
		 month ===  1 ?  aboutEarly_Text + winterSeasonText: 
		 month ===  2 ?  aboutMiddleText + winterSeasonText: 
		 month ===  3 ?  
			(day < 21 ?  aboutLate_Text  + winterSeasonText: aboutEarly_Text + springSeasonText):
		 month ===  4 ?  aboutEarly_Text + springSeasonText: 
		 month ===  5 ?  aboutMiddleText + springSeasonText: 
		 month ===  6 ?  
			(day < 21 ?  aboutLate_Text  + springSeasonText: aboutEarly_Text + summerSeasonText):
		 month ===  7 ?  aboutEarly_Text + summerSeasonText: 
		 month ===  8 ?  aboutMiddleText + summerSeasonText: 
		 month ===  9 ?  
			(day < 21 ?  aboutLate_Text  + summerSeasonText: aboutEarly_Text + autumnSeasonText):
		 month === 10 ?  aboutEarly_Text + autumnSeasonText: 
		 month === 11 ?  aboutMiddleText + autumnSeasonText: 
			(day < 21 ?  aboutLate_Text  + autumnSeasonText: aboutEarly_Text + winterSeasonText);

console.writeln(`${ mySeason_Day }${ mySeason_Month }${ mySeason_Year }${ mySeasonText }.`);


						