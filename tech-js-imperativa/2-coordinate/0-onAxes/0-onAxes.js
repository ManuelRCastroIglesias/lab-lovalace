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
 * La coordenada (2, 2) no est� en ning�n eje
 * 
 * Dame la abscisa de la coordenada:  0
 * Dame la ordenada de la coordenada:  2
 * La coordenada (0, 2) est� en el eje de abscisa
 * 
 * Dame la abscisa de la coordenada:  2
 * Dame la ordenada de la coordenada:  0
 * La coordenada (0, 2) est� en el eje de ordenadas
 * 
 * Dame la abscisa de la coordenada:  0
 * Dame la ordenada de la coordenada:  0
 * La coordenada (0, 2) est� en el eje de abscisa y de ordenadas
 * 
 * coordinate TextQuadrant
 * 
 */

const abscissa = console.readNumber("Dame las horas: ");
const ordinate = console.readNumber("Dame las horas: ");

const    textOnAxisX = abscissa === 0				? " est� sobre el eje de abscisas"  : "" ;
const    textOnAxisY = ordinate === 0				? " est� sobre el eje de ordenadas" : "" ;
const textOriginAxis = abscissa === 0 === ordinate  ? " est�n sobre los ejes de abscisas y de ordenadas"
                     : abscissa !== 0 !== ordinate  ? " no est�n sobre ninguno de los ejes" : "" ;
// const   textQuadrant = abscissa === 0 ;

console.writeln("La coordenada `(`${abscissa}, {ordinate}`)` {TextQuadrant}.")
