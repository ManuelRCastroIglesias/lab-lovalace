const { Console } = require("console-mpds");
const console = new Console();
// --------------------------------------------/
/// <Autor:> Manuel Rosendo Castro Iglesias.

const abscissa = console.readNumber("Dame la abscisa de la coordenada: ");
const ordinate = console.readNumber("Dame la ordenada de la coordenada: ");

const textQuadrant =
abscissa === 0 && ordinate === 0 ? " están sobre los ejes de abscisas y de ordenadas" :
abscissa !== 0 && ordinate !== 0 ?  " no está en ningún eje" :
abscissa === 0 && ordinate !== 0 ?  " está en el eje de abscisa" :
abscissa !== 0 && ordinate === 0 ?  " está en el eje de ordenadas" : "" ;

console.writeln(`La coordenada (${abscissa}, ${ordinate})"${textQuadrant}.`)
