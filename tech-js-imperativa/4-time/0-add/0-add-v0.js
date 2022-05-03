const { Console } = require("console-mpds");
const console = new Console();
// --------------------------------------------/
/// Autor:  Manuel Rosendo Castro Iglesias.
/// Autora: María Paz López.
/// Contiene dos versiones. Añadir o quitar / al inicio de línea 28.
/// Es innecesario pero nos sale gratis. 
/// Versión con sentencias IF, WHIL y Do-WHILE. {y FOR() por no dejar}

const firstHours = console.readNumber('Dame las horas: ');
const firstMinutes = console.readNumber('Dame los  minutos: ');
const firstSeconds = console.readNumber('Dame los  segundos: ');
console.writeln();
const secondHours = console.readNumber('Dame más Horas: ');
const secondMinutes = console.readNumber('Dame más Minutos: ');
const secondSeconds = console.readNumber('Dame más Segundos: ');
console.writeln();

// TODO: refactorizar eliminando variables ¿es necesario? Pero creo que esto es lo más legible.
const addedSeconds = firstSeconds + secondSeconds;
const residueSeconds = addedSeconds % 60;
const minutesFromSeconds = (addedSeconds - residueSeconds) / 60;

const addedMinutes = firstMinutes + secondMinutes + minutesFromSeconds;
const residueMinutes = addedMinutes % 60;
const hoursFromMinutes = (addedMinutes - residueMinutes) / 60;

/*// Para intecambiar código añadir barra al inicio. Funciona en Visual Studio * 
	/*/
	const residueHours = firstHours + secondHours + hoursFromMinutes;
	console.writeln(`La suma es ${residueHours}:${residueMinutes}:${residueSeconds}`);
	/*/ 
	const addedHours = firstHours + secondHours + hoursFromMinutes;
	const residueHours = addedHours % 24;
	const daysFromHours = (addedHours - residueHours) / 24;
	console.writeln(`La suma es ${daysFromHours} días y ${residueHours}:${residueMinutes}:${residueSeconds}`);
//*/
console.writeln();