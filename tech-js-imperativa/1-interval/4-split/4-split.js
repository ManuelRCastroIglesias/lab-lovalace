const { Console } = require("console-mpds");
const console = new Console();
//// --------------------------------------------/
/// <Autor:Manuel Rosendo Castro Iglesias.> 
/// <Autor: >
/// <Titulo: ### 4-split>
//// --------------------------------------------/

let intMin;
let intMax;
let intervals;
const error = `Error!!! El máximo debe ser superior o igual al minimo`;
let ok;
do {
    ok = true;
    intMin = console.readNumber('Introduce el mínimo del intervalo: ');
    intMax = console.readNumber('Introduce el maximo del intervalo (superior o igual al mínimo): ');
    if (intMin > intMax) {
        console.writeln(error);
        ok = false;
    }
} while (!ok);
do {
    ok = true;     //redundante, por si se modifica el código y por facilitar la lectura.
    intervals = console.readNumber('Introduce una cantidad positiva de intervalos: ');
    if (intervals <= 0) {
        console.writeln(`Error!!! La cantidad debe ser positiva`);
        ok = false;
    }
} while (!ok);
const LenghtIntervals = (intMax - intMin) / intervals;
let msg = `El intervalo [${intMin}, ${intMax}] dividido en ${intervals} intervalos son`;
let init = intMin;
for (i = 1; i <= intervals; i++) {
    msg += ` [${init}, ${init + LenghtIntervals} ]`;
    init += LenghtIntervals;
    separation = ",";
    if (i === intervals) {
        separation = "";
    } else if (i === intervals - 1) {
        separation = " y";
    }
    msg += separation;
}
console.writeln(msg);