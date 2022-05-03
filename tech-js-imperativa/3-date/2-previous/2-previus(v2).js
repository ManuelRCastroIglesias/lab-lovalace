const { Console } = require( "console-mpds" );
const console = new Console();
// --------------------------------------------/
/// Autor: Manuel Rosendo Castro Iglesias.
/// Se consideran todos los meses de 30 días.
// ### 3-date/2-previus

const day = console.readNumber( 'Escriba el dia (1-30):  ' );
const month = console.readNumber( 'Escriba el mes (1-12):  ' );
const year = console.readNumber( 'Escriba el año (01-99):  ' );
console.writeln();

let dateValid2 =
    !(
        (
            (
                (
                    (
                        day < 1 || day > 30 )
                    || month < 1 )
                || month > 12 )
            || year < 0 )
        || year > 99
    );
//-- -> is false if any is true.
// La retaíla de paréntesis es para forzar al navegador (o intérprete) a evaluar  toda la expresión ¡por si las moscas!



const firstDayCE = ( ( ( 1 === day ) && 1 === month ) && 1 === year );
const theNewYearDay = ( ( ( 1 === day) && 1 === month) && 1 !== year);
const firstDayOfMonth = (1=== day) && ( month !== 1 );

//if ( firstDayCE)
//{
//    previusDay = day ;
//    previusMonth = month ;
//    previusYear = year;
//    dateValid2 = 0; 
//}
//else
//    if ( theNewYearDay )
//    {
//        previusDay = day + 29;
//        previusMonth = month + 11;
//        previusYear = year - 1;
//    }
//    else
//        if ( firstDayOfMonth)
//        {
//            previusDay = day + 29;
//            previusMonth = month - 1;
//            previusYear = year;
//        }
//        else
//        {
//            previusDay = day -1;
//            previusMonth = month;
//            previusYear = year;
//        }

( dateValid2 === 1) ?
    console.writeln( `La fecha ${ day }/${ month }/${ year } y la siguiente es ${ previusDay }/${ previusMonth }/${ previusYear }` ) :
    console.writeln( `La fecha ${ day }/${ month }/${ year } no es una fecha válida` );
console.writeln();