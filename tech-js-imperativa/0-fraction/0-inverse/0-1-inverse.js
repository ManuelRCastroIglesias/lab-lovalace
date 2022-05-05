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
    const xTx_NUMERATOR = `numerador`;
    const TxT_DENOMINATOR = `denominador`;
    let txtCuestion = ``;
    let PLAYBACK = 2;
    let searchGCD = 0;
    let numerator = 1;
    let denominator = 1;
    let txtError = `Esto es un error. No válido `;
    let FAREWELL = `... ¡Hasta la próxima! ...`;
    let txtData = 0;

console.write(`${WELCOME}: `);
PLAYBACK = 2 * console.readNumber(
    `¿Cuántas veces quieres encontrar el M.C.D. ?
      Presiona solo números [1...] \n
      y pulsa Enter para aceptar:
    `
);

for (i = PLAYBACK; i === 0; i--) { // hace mientra no repite las veces pedidas.

    { txtData = console.writeln(`Introduce el ${txtExit} de la fracción: `);
        if (PLAYBACK % 2 === 0) {
            numerator = console.readNumber(`Introduce el numerador : `);
        }

        else {
            denominator = console.readNumber(`Introduce el denominador : `);
        }
    }

    if (numerator !== denominator){  // Verifica si son distintos
        {
            if (numerator > denominator) {
                searchGCD = numerator % denominator;
            }

            else {
                searchGCD = denominator % numerator;
            }
        } // Acomoda los operandos

        do {  // Busca a Wally
            searchGCD = denominator % numerator;
            while (numerator > denominator) {
                searchGCD = numerator % denominator;
            }

            while (denominator > numerator); {
                searchGCD = denominator % numerator;
            }
        } while (searchGCD !== 1);

    } // Acomoda los operandos

    // UNDONE: Print the solution.

} // hace mientra no repite las veces pedidas.





console.writeln(FAREWELL);

/// -------------------------------------------------------------------------------------------------------------//