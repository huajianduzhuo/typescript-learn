/**
 * 交叉类型
 * 使用 &
 * @template T
 * @template U
 * @param {T} first
 * @param {U} second
 * @returns {(T & U)}
 */
function extend(first, second) {
    var result = {};
    for (var key in first) {
        result[key] = first[key];
    }
    for (var key in second) {
        if (second.hasOwnProperty(key)) {
            result[key] = second[key];
        }
    }
    return result;
}
/**
 * 联合类型
 * 使用 |
 * @param {string} value
 * @param {(string | number)} padding
 * @returns
 */
function padLeft(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(" ") + value;
    }
    else {
        return padding + value;
    }
}
function getPet() {
    return {};
}
var pet = getPet();
pet.layEggs();
// pet.fly() // 报错：Property 'fly' does not exist on type 'Bird | Fish'. Property 'fly' does not exist on type 'Fish'.
if (pet.fly) {
    pet.fly();
}
else {
    pet.swim();
}
/**
 * 类型保护
 * @param {(Bird | Fish)} pet
 * @returns {pet is Fish} 类型谓词
 */
function isFish(pet) {
    return pet.swim !== undefined;
}
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
/**
 * typeof 类型保护
 * @param {string} value
 * @param {(string | number)} padding
 * @returns
 */
function padLeft2(value, padding) {
    if (typeof padding === 'number') {
        padding.toFixed(2);
        return Array(padding + 1).join(" ") + value;
    }
    else {
        padding.charAt(1);
        return padding + value;
    }
}
var SpaceRepeatingPadder = /** @class */ (function () {
    function SpaceRepeatingPadder(spaceNum) {
        this.spaceNum = spaceNum;
    }
    SpaceRepeatingPadder.prototype.getPaddingStr = function () {
        return Array(this.spaceNum + 1).join(' ');
    };
    return SpaceRepeatingPadder;
}());
var StringPadder = /** @class */ (function () {
    function StringPadder(value) {
        this.value = value;
    }
    StringPadder.prototype.getPaddingStr = function () {
        return this.value;
    };
    return StringPadder;
}());
function getRandomPadder() {
    return Math.random() < 0.5 ? new SpaceRepeatingPadder(4) : new StringPadder('  ');
}
var padder = getRandomPadder();
if (padder instanceof SpaceRepeatingPadder) {
    // padder.value // 报错：Property 'value' does not exist on type 'SpaceRepeatingPadder'.
    console.log(padder.spaceNum);
}
if (padder instanceof StringPadder) {
    // padder.spaceNum // 报错：[ts] Property 'spaceNum' does not exist on type 'StringPadder'.
    console.log(padder.value);
}
/**
 * undefined 和 null
 * strictNullChecks 为 true，不再可以赋值给任何类型
 */
var s = 'abc';
// s = undefined // 报错：Type 'undefined' is not assignable to type 'string'
// s = null // 报错：Type 'null' is not assignable to type 'string'
/**
 * strictNullChecks 为 true，可选参数可为 undefined
 * @param a
 * @param b 可选参数类型会被自动加上 | undefined
 */
function f(a, b) {
    return a + (b || 0);
}
f(1, 3);
f(1, undefined);
// f(1, null) // 报错：Argument of type 'null' is not assignable to parameter of type 'number | undefined'.
/**
 * strictNullChecks 为 true，可选属性类型也会被自动加上 | undefined
 */
var C = /** @class */ (function () {
    function C(a, b) {
        this.a = a;
        this.b = b;
    }
    return C;
}());
var cc = new C(1, undefined);
var cc2 = new C(1, 4);
// let cc3 = new C(1, null) // 报错：Argument of type 'null' is not assignable to parameter of type 'number | undefined'.
/**
 * identifier! 类型保护
 * 从 identifier 的类型里去除了 null 和 undefined
 * @param str
 */
function fn(str) {
    return str.charAt(0);
}
function translate(easing) {
    if (easing === 'ease-in') {
    }
    else if (easing === 'ease-out') {
    }
    else {
    }
}
// translate('linear') // 报错：[ts] Argument of type '"linear"' is not assignable to parameter of type 'Easing'.
translate('ease-in-out');
function createElement(tagname) {
    return document.createElement(tagname);
}
var nn = 2;
