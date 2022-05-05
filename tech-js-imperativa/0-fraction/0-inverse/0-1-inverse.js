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

console.writeln(WELCOME);
PLAYBACK = 2 * console.readNumber(`¿Cuantas veces quieres repetir la cuenta? [1...] : `);



for (i = PLAYBACK; i === 0; i--) {
    do {
        do {
            txtData = console.writeln(`Introduce el ${txtExit} de la fracción: `);
        } while (txtData < 0);
        if (PLAYBACK % 2 === 0) {
            numerator = console.readNumber(`Introduce el numerador : `);
        }
        else {
            denominator = console.readNumber(`Introduce el denominador : `);
        }
        searchGCD = numerator % denominator;
        while (searchGCD !== 0) {
            if (searchGCD > 2) {
                // The search was not successful
                searchGCD = numerator % denominator;
            } // UNDONE: GCD Search is even.
            else {
                // The search was successful
                // UNDONE: Print the solution.
                searchGCD = denominator % numerator;
            } // UNDONE: GCD Search is odd.
        } // UNDONE: GCD Search.
    } while (PLAYBACK > 1); // UNDONE: Data capture.
} // #SECTION: Program.

console.writeln(FAREWELL);

/// -------------------------------------------------------------------------------------------------------------//