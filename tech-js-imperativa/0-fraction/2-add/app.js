const { Console } = require("console-mpds");

const console = new Console();
const fractions = [];
const SIZE = 2;

console.writeln(`Primera fracción: `);

for (let i = 0; i < SIZE; i++) {
  fractions[i] = readFraction();
}

let sum = newFraction(0,1);

for (let i = 0; i < fractions.length; i++) {
    sum = addFractions(sum, fractions[i]);
}

console.writeln(`La suma de la fracción ${fractions[0].numerator}/${fractions[0].denominator} y la fracción ${fractions[1].numerator}/${fractions[1].denominator} es la fracción ${toStringFraction(sum)}`);
function readFraction() {
    return {    
        numerator: console.readNumber(`Introduce el numerador de la fracción: `),
        denominator: console.readNumber(`Introduce el denominador de la fracción: `),
    };
}

function newFraction(numerator, denominator){
    return {
      numerator : numerator,
      denominator : denominator,
    }
}

function addFractions(left, right) {
    return simplifiedFraction({
      numerator: left.numerator * right.denominator + right.numerator * left.denominator,
      denominator: left.denominator * right.denominator
    });
}

function simplifiedFraction(fraction) {

    function gcd(a, b) {
      if (a == b)
        return a;
      if (a > b)
        return gcd(a - b, b);
      return gcd(a, b - a);
    }
  
    const divisor = gcd(fraction.numerator, fraction.denominator);
    return {
      numerator : fraction.numerator / divisor,
      denominator : fraction.denominator / divisor
    };
}

function toStringFraction(fraction) {
    return `${fraction.numerator}/${fraction.denominator}`;
}