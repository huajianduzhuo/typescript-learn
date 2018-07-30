"use strict";
var zipCodeReg = /^[0-9]{6}$/;
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return zipCodeReg.test(s);
    };
    return ZipCodeValidator;
}());
module.exports = ZipCodeValidator;
