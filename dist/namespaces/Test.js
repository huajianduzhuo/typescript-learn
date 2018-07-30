/// <reference path="./Validation.ts" />
/// <reference path="./LettersOnlyValidator.ts" />
/// <reference path="./ZipCodeValidator.ts" />
var strings = ['Hello', '10000', '123'];
var validators = {};
validators['Letters Only'] = new Validation.LettersOnlyValidator();
validators['Zip Code'] = new Validation.ZipCodeValidator();
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var s_1 = strings_1[_i];
    for (var name_1 in validators) {
        var isMatch = validators[name_1].isAcceptable(s_1);
        console.log(s_1 + " " + (isMatch ? 'matches' : 'does not match') + " " + name_1);
    }
}
