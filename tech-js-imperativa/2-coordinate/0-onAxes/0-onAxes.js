const { Console } = require("console-mpds");
const console = new Console();
// --------------------------------------------/
/// <Autor:> Manuel Rosendo Castro Iglesias.
/*
 *  # 2-coordinate
 * ## 0-onAxes
 * 
 * Dame la abscisa de la coordenada:  2
 * Dame la ordenada de la coordenada:  2
 * La coordenada (2, 2) no está en ningún eje
 * 
 * Dame la abscisa de la coordenada:  0
 * Dame la ordenada de la coordenada:  2
 * La coordenada (0, 2) está en el eje de abscisa
 * 
 * Dame la abscisa de la coordenada:  2
 * Dame la ordenada de la coordenada:  0
 * La coordenada (0, 2) está en el eje de ordenadas
 * 
 * Dame la abscisa de la coordenada:  0
 * Dame la ordenada de la coordenada:  0
 * La coordenada (0, 2) está en el eje de abscisa y de ordenadas
 */

const abscissa = console.readNumber("Dame la abscisa de la coordenada: ");
const ordinate = console.readNumber("Dame la ordenada de la coordenada: ");

// const    textOnAxisX = abscissa === 0				? " está sobre el eje de abscisas"  : "" ;
// const    textOnAxisY = ordinate === 0				? " está sobre el eje de ordenadas" : "" ;
// const textOriginAxis = abscissa === 0 === ordinate  ? " están sobre los ejes de abscisas y de ordenadas"
//                      : abscissa !== 0 !== ordinate  ? " no están sobre ninguno de los ejes" : "" ;
let textQuadrant =
abscissa === 0 && ordinate === 0 ? " están sobre los ejes de abscisas y de ordenadas" :
abscissa !== 0 && ordinate !== 0 ?  "no está en ningún eje" :
abscissa === 0 && ordinate !== 0 ?  "está en el eje de abscisa" :
abscissa !== 0 && ordinate === 0 ?  "está en el eje de ordenadas" : "" ;

console.writeln("La coordenada (" + abscissa + "," + ordinate + ")" + textQuadrant+".")
