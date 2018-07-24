var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 泛型
 * @template T 类型变量
 * @param {T} x
 * @returns {T}
 */
function identify(x) {
    // console.log(x.length) // 报错：Property 'length' does not exist on type 'T'.
    return x;
}
var output1 = identify('a');
var output2 = identify('a');
/**
 * 将泛型变量 T 当作类型的一部分使用
 * @template T 泛型变量
 * @param {T[]} x
 * @returns {T[]}
 */
function identify2(x) {
    return x;
}
identify2(['a']);
var myIdentify = identify;
var myIdentify2 = identify;
/**
 * 泛型类
 * @class genericClass
 * @template T
 */
var genericClass = /** @class */ (function () {
    function genericClass() {
    }
    return genericClass;
}());
var myGenericClass = new genericClass();
myGenericClass.a = 12;
myGenericClass.add = function (x, y) {
    return x + y;
};
/**
 * 泛型约束
 * @template T 继承 lengthWise 接口，保证传进来的参数具有 length 属性
 * @param {T} x
 * @returns {T}
 */
function identify4(x) {
    console.log(x.length);
    return x;
}
function getProperty(obj, key) {
    return obj[key];
}
var obj = { a: 'aaa', b: 'bbb' };
getProperty(obj, 'a');
// getProperty(obj, 'c') // 报错：[ts] Argument of type '"c"' is not assignable to parameter of type '"a" | "b"'
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
}());
var Animals = /** @class */ (function () {
    function Animals() {
    }
    return Animals;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animals));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animals));
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag; // typechecks!
createInstance(Bee).keeper.hasMask; // typechecks!
