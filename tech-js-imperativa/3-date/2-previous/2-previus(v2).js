const { Console } = require( "console-mpds" );
const console = new Console();
/// --------------------------------------------/
/// <Autor: Manuel Rosendo Castro Iglesias>
/// <Title: ### 3-date/2-previus>
/// Se consideran todos los meses de 30 días.
/// --------------------------------------------/

let day = 1;
do{
    day = console.readNumber( 'Escriba el dia (1-30): ' );
} while ( day < 1 || day > 30 );
let month = 1;
do {
    month = console.readNumber( 'Escriba el mes (1-12): ' );
} while ( month < 1 || month > 12 );
let year =1;
do {
    year = console.readNumber( 'Escriba el año (01-99): ' );
} while ( year < 1 || year > 99 );
console.writeln();

if (((day === 1) && month === 1) && year !== 1) { /* Is it the the New Year'Day ? */
    previusDay = day + 29;
    previusMonth = month + 11;
    previusYear = year - 1;
}
else
    if ((1 === day) && (month !== 1)) { /* Is it the first Day Of Month ? */
        previusDay = day + 29;
        previusMonth = month - 1;
        previusYear = year * 1;
    }
    else {
        previusDay = day - 1;
        previusMonth = month * 1;
        previusYear = year * 1;
    }

(((day === 1) && month === 1) && year === 1) ? /* Is it the first day of the E.C.? */
    console.writeln(`\
        La fecha ${day}/${month}/${year} \
        y la siguiente es ${previusDay}/${previusMonth}/${previusYear}`) :
    console.writeln(`\
        La fecha ${day}/${month}/${year} no es una fecha válida`);
    console.writeln();