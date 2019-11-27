var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var getsetDecorator;
(function (getsetDecorator) {
    function configurable(value) {
        return function (target, key, desc) {
            desc.configurable = value;
            let x = 4;
            return {
                configurable: true,
                enumerable: true,
                get() { return x; },
                set(v) { x = v; }
            };
        };
    }
    class Point {
        get x() {
            return 0;
        }
    }
    __decorate([
        configurable(false)
    ], Point.prototype, "x", null);
    console.log(Point.prototype.x);
})(getsetDecorator || (getsetDecorator = {}));
