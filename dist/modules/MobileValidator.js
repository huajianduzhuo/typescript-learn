"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MobileReg = /^[0-9]{11}$/;
var MobileValidator = /** @class */ (function () {
    function MobileValidator() {
    }
    MobileValidator.prototype.isAcceptable = function (s) {
        return MobileReg.test(s);
    };
    return MobileValidator;
}());
exports.MobileValidator = MobileValidator;
