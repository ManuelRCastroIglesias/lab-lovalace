const { Console } = require("console-mpds");
const console = new Console();
/// --------------------------------------------/
/// <Autor: Manuel Rosendo Castro Iglesias>
/// <Title: ### 1-seasonWithPart/v0>
/// Se consideran todos los meses de 30 días.
/// --------------------------------------------/

// TODO: yearNow * Falta verificar dia y mes actual *
const yearNow =2022;

const day = console.readNumber ('Escriba un día (1-30): ');
const month = console.readNumber ('Escriba un mes (1-12): ');
const year = console.readNumber ('Escriba un año (… … … …): '); 

// TODO: mySeasons * Crear bucle reintento con valores false *
const myDay = day > 0 ? (day <= 31 ? "El día " + day : false) : false;
// TODO: mySeasonMonth * Si hay que nombrar el mes, corregir el texto *
// TODO: nameOfTheMonth * método Nombres del mes  ¿Método cantidad en letra?*
const myMonth = month > 0 ? (month <= 12 ? " del mes " + month : false) : false;
// TODO: mySeasonYear * Si hay que nombrar el año, corregir el texto *
// TODO: nameOfTheYear * método Nombres del año ¿Método cantidad en letra?*
const myYear = year > 0 ? (year <= yearNow ? " del año " + year : false) : false;

const EARLY = " cae a principios";
const MIDDLE = " cae a mediados";
const LATE = " cae a finales";

const WINTER = " del Invierno";
const SPRING = " de la Primavera";
const SUMMER = " del Verano";
const AUTUMN = " del Otoño";

// TODO: Crear array en cuanto se pueda.

/*// Refacroring: Whith switch case:
switch(month){
    case 1:
        
    return;
    case 2:
        
    return;
    case 3:
        
    return;
    case 4:
        
    return;
    case 5:
        
    return;
    case 6:
        
    return;
    case 7:
        
    return;
    case 8:
        
    return;
    case 9:
        
    return;
    case 10:
        
    return;
    case 11:
        
    return;
    case 12:
        
    return;
    default:
        ;
    }
/*/ // Refacroring: Whith switch case:
const mySeason =
month === 1  ? (day < 21 ? EARLY  + WINTERTxt : MIDDLE + WINTER) :
month === 2  ? (day < 21 ? MIDDLE + WINTERTxt : LATE   + WINTER) :
month === 3  ? (day < 21 ? LATE   + WINTERTxt : EARLY  + SPRING) :
month === 4  ? (day < 21 ? EARLY  + SPRINGTxt : MIDDLE + SPRING) :
month === 5  ? (day < 21 ? MIDDLE + SPRINGTxt : LATE   + SPRING) :
month === 6  ? (day < 21 ? LATE   + SPRINGTxt : EARLY  + SUMMER) :
month === 7  ? (day < 21 ? EARLY  + SUMMERTxt : MIDDLE + SUMMER) :
month === 8  ? (day < 21 ? MIDDLE + SUMMERTxt : LATE   + SUMMER) :
month === 9  ? (day < 21 ? LATE   + SUMMERTxt : EARLY  + AUTUMN) :
month === 10 ? (day < 21 ? EARLY  + AUTUMNTxt : MIDDLE + AUTUMN) :
month === 11 ? (day < 21 ? MIDDLE + AUTUMNTxt : LATE   + AUTUMN) :
               (day < 21 ? LATE   + AUTUMNTxt : EARLY  + WINTER) ;
//*/  // End refactoring block. (Se mantiene formato tabular para verificación.)

console.writeln( `${ myDay }${ myMonth }${ myYear }${ mySeason }.` );

console.writeln();