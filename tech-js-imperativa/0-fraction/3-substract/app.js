const { Console } = require("console-mpds");

const console = new Console();
const fractions = [];
const SIZE = 2;
for (let i = 0; i < SIZE; i++) {
  fractions[i] = readFraction();
}

let resta = new Fraction(0,1);
for (let i = 0; i < fractions.length; i++) {
  resta = resta.add(fractions[i]);
}

console.writeln(`La resta de la fracción ${fractions[0].numerator}/${fractions[0].denominator} y la fracción ${fractions[1].numerator}/${fractions[1].denominator} es la fracción ${toString(resta)}`);
function readFraction() {
  return new Fraction(
    console.readNumber(`Introduce el numerador de la fracción: `),
    console.readNumber(`Introduce el denominador de la fracción: `));
}

function Fraction(numerator, denominator) {
  this.numerator = numerator;
  this.denominator = denominator;

  this.add = function (fraction) {
    return new Fraction(
      this.numerator * fraction.denominator + fraction.numerator * this.denominator,
      this.denominator * fraction.denominator).simplified();
  }
  this.simplified = function () {

    function gcd(a, b) {
      if (a == b)
        return a;
      if (a > b)
        return gcd(a - b, b);
      return gcd(a, b - a);
    }

    const divisor = gcd(this.numerator, this.denominator);
    return new Fraction(this.numerator / divisor, this.denominator / divisor);
  }
  this.subtract = function (fraction) {
    return this.add(fraction.opposite());
  }

  this.opposite = function () {
    return new Fraction(-this.numerator, this.denominator);
  }

  this.toString = function () {
    return `${this.numerator}/${this.denominator}`;
  }

}
