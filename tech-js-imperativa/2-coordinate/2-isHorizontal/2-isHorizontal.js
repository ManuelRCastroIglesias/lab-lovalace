const { Console } = require("console-mpds");
const console = new Console();
/// --------------------------------------------/
/// <Autor:> Manuel Rosendo Castro Iglesias.
/// <Ejercicio:> 2-coordinate/2-isHorizontal.
///  https://github.com/USantaTecla-0-domains/0-simpleDomains/blob/master/docs/5-units.md#2-coordinate2-ishorizontal
/// --------------------------------------------/

/// ----------------------------------------------------------------------------------
console.writeln( `Coordenada origen:` );
const abscissaOrigin = console.readNumber( `Dame la abcisa de la coordenada:` );
const abscisaDestination = console.readNumber( `Dame la abcisa de la coordenada:` );
console.writeln( `Coordenada destino:` );
const orderedOrigin = console.readNumber( `Dame la abcisa de la coordenada:` );
const orderedDestination = console.readNumber( `Dame la abcisa de la coordenada:` );
/// ----------------------------------------------------------------------------------
if ( abscissaOrigin === abscisaDestination )
{
    console.writeln (`La coordenada origen (${ abscissaOrigin }, ${ abscisaDestination }) y la coordenada destino (${ orderedOrigin }, ${ orderedDestination } si es un movimiento horizontal`);
}
else
{
    console.writeln (`La coordenada origen (${ abscissaOrigin }, ${ abscisaDestination }) y la coordenada destino (${ abscisaDestination }, ${ orderedDestination } no es un movimiento horizontal)`);
}
/// ----------------------------------------------------------------------------------
