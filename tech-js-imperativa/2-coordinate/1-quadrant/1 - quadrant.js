const { Console } = require("console-mpds");
const console = new Console();
// --------------------------------------------/
/// <Autor:> Manuel Rosendo Castro Iglesias.
/// 2 - coordinate / 1 - quadrant
/// Dame la abcisa de la coordenada: 2
const abscissa = console.readNumber("Dame la abscisa de la coordenada: ");
/// Dame la ordenada de la coordenada: 2
const ordinate = console.readNumber("Dame la ordenada de la coordenada: ");
console.writeln();

const relativAbscissa = abscissa > 0 ? 1 : abscissa < 0 ? -1 : 0;
const relativOrdinate = ordinate > 0 ? 1 : ordinate < 0 ? -1 : 0;

const quadrant = relativAbscissa + relativAbscissa + relativOrdinate;

const overQuadrant =
	quadrant === 3 ? " está en el primer cuadrante" :
		quadrant === -1 ? " está en el segundo cuadrante" :
			quadrant === -3 ? " está en el tercer cuadrante" :
				quadrant === 1 ? " está en el cuarto cuadrante" : false;

// Se mantiene del ejercicio anterior. Por compatibilidad.
const textOnAxis =
	abscissa === 0 && ordinate === 0 ? " está sobre el origen de coordenadas" :
		abscissa !== 0 && ordinate !== 0 ? overQuadrant :
			abscissa === 0 && ordinate !== 0 ? " está sobre el eje de abscisa" :
				abscissa !== 0 && ordinate === 0 ? " está sobre el eje de ordenadas" : "";

console.writeln(`La coordenada (${abscissa}, ${ordinate})"${textOnAxis}.`)


