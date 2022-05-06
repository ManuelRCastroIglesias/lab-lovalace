const { Console } = require("console-mpds");
const console = new Console();
{// #SECTION: Credits.
/// --------------------------------------------------------------------------------------------------------------/
///  https://github.com/USantaTecla-0-domains/0-simpleDomains/blob/master/docs/5-units.md#0-fraction0-1-inverse   /
/// --------------------------------------------------------------------------------------------------------------/
///                                  <Autor:> Manuel Rosendo Castro Iglesias.                                     /
///                                    <Titulo:> 0-fraction/0-1-inverse)                                          /
/// --------------------------------------------------------------------------------------------------------------/
///                          Simplificando la fracción mediante el máximo común divisor                           /
///	        --(visto en el "Recursividad en la Ciencia" del tema "Patrones" del módulo de Fundamentos)--          /
/// --------------------------------------------------------------------------------------------------------------/
}// #SECTION: Credits.

    const WELCOME = ` Bienvenido al buscador de M.C.D.`;
let PLAYBACK = 0;
    let TxT_NUMERATOR = `numerador`;
    let TxT_DENOMINATOR = `denominador`;
    let numerator = 1;
    let denominator = 1;
    
    let FAREWELL = `... ¡Hasta la próxima! ...`;

    let txtError = `Esto es un error. No válido `;
    let txtCuestion = ``;
    let searchGCD = 0;
    let txtData = 0;
    let txtExit = ``;

console.write(`${WELCOME}: `);
    PLAYBACK = +console.readNumber(`¿Cuántas veces quieres encontrar el M.C.D. ? Presiona solo números [1...] \n y pulsa Enter para aceptar: `);

do {
    numerator = console.readNumber(`Introduce el ${TxT_NUMERATOR}.`);
    denominator = console.readNumber(`Introduce el ${TxT_DENOMINATOR}.`);

            if (numerator > denominator) {
                console.writeln(`La fracción es: ${numerator}/${denominator}.`);


                do {
                    searchGCD = numerator
                    console.writeln(`${searchGCD}`);

                    searchGCD = numerator % denominator;

                    console.writeln(`La fracción inversa es: ${denominator}/${numerator}.`);
                    console.writeln(`${searchGCD}`);

                }
                while (searchGCD % 2 !== 0);
                console.writeln(`La fracción inversa es: ${numerator}/${denominator}.`);
            }
            else {
                console.writeln(`La fracción inversa es: ${denominator}/${numerator}.`);



        console.writeln(`La fracción es: ${denominator}/${numerator}.`);
    }

        PLAYBACK -= 1;
} while(PLAYBACK > 0)


// console.writeln(`La fracción inversa es: ${denominator}/${numerator}.`);

// console.writeln(`La fracción es: ${numerator}/${denominator}.`);


console.writeln(FAREWELL);
console.readString();
/// -------------------------------------------------------------------------------------------------------------//