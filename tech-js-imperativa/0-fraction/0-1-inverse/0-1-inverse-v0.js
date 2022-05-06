const { Console } = require("console-mpds");
const console = new Console();

//considero cualquier año, 12 meses y 31 días por mes. no acepto valores<=0, año de 0 adelante, el ejercicio no contempla ac dc

const MAXDAYS = 30;
const MAXMONTHS = 12;
let day;
let month;
let year;
for (i = 0; i < 3; i++) {
    let text = `dame el `;
    let fact;
    let min;
    switch (i) {
        case 0:
            text += `día: `;
            min = 1;
            break;
        case 1:
            text += `mes: `;
            min = 1;
            break;
        case 2:
            text += `año: `;
            min = 0;
            break;
    }
    do {
        fact = console.readNumber(text);
    } while (fact < min);
    switch (i) {
        case 0:
            day = fact;
            break;
        case 1:
            month = fact;
            break;
        case 2:
            year = fact;
            break;
    }
}
let msg = `la fecha ${day}/${month}/${year}`;
let valid = true;
day > MAXDAYS ? valid = false : "";
month > MAXMONTHS ? valid = false : "";
valid === true ? msg += ` es válida` : msg += ` no es válida`;
console.writeln(msg);
