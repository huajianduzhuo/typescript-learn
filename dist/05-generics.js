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
myGenericClass.add = function (x, y) { return x + y; };
