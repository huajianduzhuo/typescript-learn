/* namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }
  
  let letterRegexp = /^[A-Za-z]+$/
  let numberRegexp = /^[0-9]+$/
  
  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string): boolean {
      return letterRegexp.test(s)
    }
  }
  
  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string): boolean {
      return s.length === 5 && numberRegexp.test(s)
    }
  }
}

let strings = ['Hello', '10000', '123']

let validators: {[s: string]: Validation.StringValidator;} = {}
validators['Letters Only'] = new Validation.LettersOnlyValidator()
validators['Zip Code'] = new Validation.ZipCodeValidator()

for (const s of strings) {
  for (const name in validators) {
    const isMatch = validators[name].isAcceptable(s)
    console.log(`${s} ${isMatch ? 'matches' : 'does not match'} ${name}`)
  }
}
 */
var Shapes;
(function (Shapes) {
    var Polygons;
    (function (Polygons) {
        var Triggle = /** @class */ (function () {
            function Triggle() {
            }
            return Triggle;
        }());
        Polygons.Triggle = Triggle;
        var Square = /** @class */ (function () {
            function Square() {
            }
            return Square;
        }());
        Polygons.Square = Square;
    })(Polygons = Shapes.Polygons || (Shapes.Polygons = {}));
})(Shapes || (Shapes = {}));
var Polygons = Shapes.Polygons;
var tri = new Polygons.Triggle();
