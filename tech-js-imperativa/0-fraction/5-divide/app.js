const { Console } = require("console-mpds");
const console = new Console();

console.writeln("Primera fracción: ");
const a = console.readNumber(`Introduce el numerador de la fracción: `);
const b = console.readNumber("Introduce el denominador de la fracción: ");
console.writeln("Segunda fracción: ");
const c = console.readNumber("Introduce el numerador de la fracción: ");
const d = console.readNumber("Introduce el denominador de la fracción: ");

const dividir = (a*d/b*c);
console.writeln(`La división de la fracción ${a}/${b} y la fracción ${c}/${d} es la fracción ${dividir}`);