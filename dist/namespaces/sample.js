/// <reference path="./Validation.ts" />
var Validation;
(function (Validation) {
    var letterRegexp = /^[A-Za-z]+$/;
    var LettersOnlyValidator = /** @class */ (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return letterRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation.LettersOnlyValidator = LettersOnlyValidator;
})(Validation || (Validation = {}));
/// <reference path="./Validation.ts" />
var Validation;
(function (Validation) {
    var numberRegexp = /^[0-9]+$/;
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
/// <reference path="./Validation.ts" />
/// <reference path="./LettersOnlyValidator.ts" />
/// <reference path="./ZipCodeValidator.ts" />
var strings = ['Hello', '10000', '123'];
var validators = {};
validators['Letters Only'] = new Validation.LettersOnlyValidator();
validators['Zip Code'] = new Validation.ZipCodeValidator();
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var s = strings_1[_i];
    for (var name_1 in validators) {
        var isMatch = validators[name_1].isAcceptable(s);
        console.log(s + " " + (isMatch ? 'matches' : 'does not match') + " " + name_1);
    }
}
