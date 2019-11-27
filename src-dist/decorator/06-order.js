var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function forClass() {
    console.log('for class');
    return function (target) {
        console.log('for class inner');
    };
}
function forMethod() {
    console.log('for method');
    return function (target, key, desc) {
        console.log('for method inner');
    };
}
function forGetSet() {
    console.log('for get set');
    return function (target, key, desc) {
        console.log('for get set inner');
    };
}
function forProperty() {
    console.log('for property');
    return function (target, key) {
        console.log('for property inner');
    };
}
function forParam() {
    console.log('for param');
    return function (target, key, index) {
        console.log('for param inner');
    };
}
let Point = class Point {
    get y() { return 0; }
    setX(x) { this.x = x; }
};
__decorate([
    forProperty()
], Point.prototype, "x", void 0);
__decorate([
    forGetSet()
], Point.prototype, "y", null);
__decorate([
    forMethod(), __param(0, forParam())
], Point.prototype, "setX", null);
Point = __decorate([
    forClass()
], Point);
