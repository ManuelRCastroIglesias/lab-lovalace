const { Console } = require("console-mpds");

const console = new Console();

/// Primer ciclo "dijo que no usaramos no FOR() ni WHILE() ni DO WHILE()

const firstHours = console.readNumber('Dame las horas: ');
const firstMinutes = console.readNumber('Dame los  minutos: ');
const firstSeconds = console.readNumber('Dame los  segundos: ');
//console.writeln(``);

const secondHours = console.readNumber('Dame las Horas: ');
const secondMinutes = console.readNumber('Dame los Minutos: ');
const secondSeconds = console.readNumber('Dame los Segundos: ');
//console.writeln(``);

console.writeln(`La suma es ${firstHours - secondHours}:${firstMinutes - secondMinutes}:${firstSeconds - secondSeconds}`);

// Para descomentar rapidamente en Visual Studio: Quitar o poner la primera / en  //*//
/*//
    ////   -- Importante no alterar el orden de las siguientes l�neas  --  --  --  --  --  --  --
    const hours = firstHours + secondHours
    const seconds = firstSeconds + secondSeconds;
    seconds > 60 ? (minutes += (seconds - seconds % 60) / 60) : seconds = seconds % 60;
    const minutes = firstMinutes + secondMinutes;
    minutes > 60 ? (hours += (minutes - minutes % 60) / 60) : minutes = minutes % 60;
    ////   -- Importante no alterar el orden de las l�neas precedentes --  --  --  --  --  --  --
    console.writeln(`La suma es ${hours}:${minutes}:${seconds}`);


    console.writeln(``);

    /// Segundo ciclo "dijo que no usaramos no FOR() ni WHILE() ni DO WHILE()

    const firstHours2 = console.readNumber('Dame las horas: ');
    const firstMinutes2 = console.readNumber('Dame los  minutos: ');
    const firstSeconds2 = console.readNumber('Dame los  segundos: ');
    //console.writeln(``);

    const secondHours2 = console.readNumber('Dame las Horas: ');
    const secondMinutes2 = console.readNumber('Dame los Minutos: ');
    const secondSeconds2 = console.readNumber('Dame los Segundos: ');
    //console.writeln(``);

    ////   -- Importante no alterar el orden de las siguientes l�neas  --  --  --  --  --  --  --
    const hours2 = firstHours2 + secondHours2
    const seconds2 = firstSeconds2 + secondSeconds2;
    seconds2 > 60 ? (minutes2 += (seconds2 - seconds2 % 60) / 60) : seconds2 = seconds2 % 60;
    const minutes2 = firstMinutes2 + secondMinutes2;
    minutes2 > 60 ? (hours2 += (minutes2 - minutes2 % 60) / 60) : minutes2 = minutes2 % 60;
    ////   -- Importante no alterar el orden de las l�neas precedentes --  --  --  --  --  --  --
    console.writeln(`La suma es ${hours2}:${minutes2}:${seconds2}`);

    Coinsole.readstring()

//*/
