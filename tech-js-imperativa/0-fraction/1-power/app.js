const { Console } = require("console-mpds");
const console = new Console();

const numerador = console.readNumber(`Introduce el numerador de la fracción: `);
const denominador = console.readNumber(`Introduce el denominador de la fracción: `);
const exponente = console.readNumber(`Introduce un exponente: `);
const calculo_exponente_numerador = numerador ** exponente;
const calculo_exponente_denominador = denominador ** exponente;

console.writeln(`La fracción ${numerador}/${denominador} elevado a ${exponente} es la fracción ${calculo_exponente_numerador}/${calculo_exponente_denominador}`);