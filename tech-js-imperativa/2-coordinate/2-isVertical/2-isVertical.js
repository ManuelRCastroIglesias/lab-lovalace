const { Console } = require( "console-mpds" );
const console = new Console();
/// --------------------------------------------/
/// <Autor:> Manuel Rosendo Castro Iglesias.
/// <Ejercicio:> 2-coordinate/2-isVertical
///  https://github.com/USantaTecla-0-domains/0-simpleDomains/blob/master/docs/5-units.md#2-coordinate2-isvertical
/// --------------------------------------------/

/// ----------------------------------------------------------------------------------
console.writeln( `Coordenada origen:` );
const abscissaOrigin = console.readNumber( `Dame la abcisa de la coordenada:` );
const abscisaDestination = console.readNumber( `Dame la abcisa de la coordenada:` );
console.writeln( `Coordenada destino:` );
const orderedOrigin = console.readNumber( `Dame la abcisa de la coordenada:` );
const orderedDestination = console.readNumber( `Dame la abcisa de la coordenada:` );
console.writeln();
/// ----------------------------------------------------------------------------------
if ( orderedOrigin === orderedDestination )
{
    console.writeln( `La coordenada origen (${ abscissaOrigin }, ${ abscisaDestination }) y la coordenada destino (${ orderedOrigin }, ${ orderedDestination } no es un movimiento vertical` );
}
else
{
    console.writeln( `La coordenada origen (${ abscissaOrigin }, ${ abscisaDestination }) y la coordenada destino (${ abscisaDestination }, ${ orderedDestination } si es un movimiento vertical)` );
}
/// ----------------------------------------------------------------------------------