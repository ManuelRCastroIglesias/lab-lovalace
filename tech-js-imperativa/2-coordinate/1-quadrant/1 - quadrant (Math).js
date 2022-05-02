const { Console } = require("console-mpds");
const console = new Console();
// --------------------------------------------/
/// <Autor:> Manuel Rosendo Castro Iglesias.
/// 0-onAxes\1-quadrant (v.Math)
// --------------------------------------------/

let X=0;           // X
let Xi=0;          // relative X
let Y=0;           // Y
let Yi=0;          // relative Y
let XY=0;          // XY
// ( I   )  = +3;  // first XY
// ( II  )  = -1;  // second XY
// ( III )  = -3;  // third XY
// ( IV  )  = +1;  // fourth XY

X = + console.readNumber( "Dame la abscisa de la coordenada: ");
Y = + console.readNumber("Dame la ordenada de la coordenada: ");
console.writeln();

(Xi) = (X > 0) ? 1 : (X < 0) ? -1 : 0;
(Yi) = (Y > 0) ? 1 : (Y < 0) ? -1 : 0;

XY = (Xi + Xi + Yi);

on_XY =
    ( XY ) === +3 ? " está en el primer cuadrante" :
    ( XY ) === -1 ? " está en el segundo cuadrante":
    ( XY ) === -3 ? " está en el tercer cuadrante" :
    ( XY ) === -1 ? " está en el cuarto cuadrante" : false;

txt_XY_axis =
    (X === 0) && (Y === 0) ? " está sobre el origen de coordenadas" :
    (X !== 0) && (Y !== 0) ? on_XY :
    (X === 0) && (Y !== 0) ? " está sobre el eje de abscisa" :
    (X !== 0) && (Y === 0) ? " está sobre el eje de ordenadas" : "";

console.writeln( `La coordenada (${ X }, ${ Y })"${ txt_XY_axis }.` );
console.writeln();


