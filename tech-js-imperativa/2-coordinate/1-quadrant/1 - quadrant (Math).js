const { Console } = require("console-mpds");
const console = new Console();
// --------------------------------------------/
/// <Autor:> Manuel Rosendo Castro Iglesias.
/// 0-onAxes\1-quadrant (v.Math)
// --------------------------------------------/
    let X=0;    // abcissas           //
    let Xi = 0; // relative abcissas  //
    let Y = 0;  // ordinates          //
    let Yi = 0; // relative ordinates //
    let XY = 0; // quadrant           //
    // first  quadrant ( I   ) = +3;  //
    // second quadrant ( II  ) = -1;  //
    // third  quadrant ( III ) = -3;  //
    // fourth quadrant ( IV  ) = +1;  //
// --------------------------------------------/
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


