/**
 * 数组
 * 类型[]
 * Array<类型>
 */
let list1 = [1, 2, 4, 'fds'];
let list2 = [4, 6, 8, true];
console.log(list1, list2);
/**
 * 元组 tuple
 * 已知数量和类型的数组
 */
let t1;
t1 = ['盖聂', 10, true];
console.log(t1[0].substring(0));
t1[1] = 12;
/**
 * 枚举 enum
 * 相当于为对象双向定义 key 和 value
 * 默认从 0 开始
 * 可以从某一个值开始指定起始编号
 */
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
let c = Color.GREEN;
console.log(c); // 1
console.log(Color); // { '0': 'RED', '1': 'GREEN', '2': 'BLUE', RED: 0, GREEN: 1, BLUE: 2 }
// 枚举 enum 指定起始编号
var Color2;
(function (Color2) {
    Color2[Color2["RED"] = 3] = "RED";
    Color2[Color2["GREEN"] = 4] = "GREEN";
    Color2[Color2["BLUE"] = 5] = "BLUE";
})(Color2 || (Color2 = {}));
console.log(Color2); // { '3': 'RED', '4': 'GREEN', '5': 'BLUE', RED: 3, GREEN: 4, BLUE: 5 }
// 手动赋值
var Color3;
(function (Color3) {
    Color3[Color3["RED"] = 3] = "RED";
    Color3[Color3["GREEN"] = 7] = "GREEN";
    Color3[Color3["BLUE"] = 1] = "BLUE";
})(Color3 || (Color3 = {}));
console.log(Color3); // { '1': 'BLUE', '3': 'RED', '7': 'GREEN', RED: 3, GREEN: 7, BLUE: 1 }
// 从中间指定起始编号
var Color4;
(function (Color4) {
    Color4[Color4["RED"] = 0] = "RED";
    Color4[Color4["GREEN"] = 5] = "GREEN";
    Color4[Color4["BLUE"] = 6] = "BLUE";
})(Color4 || (Color4 = {}));
console.log(Color4); // { '0': 'RED', '5': 'GREEN', '6': 'BLUE', RED: 0, GREEN: 5, BLUE: 6 }
/**
 * any
 * 可以赋予任何类型的值
 * 不进行类型检查
 * 与 Object 类型的区别
 *    Object 类型也可以赋予任何类型的值
 *    any 类型不进行类型检查，可以调用任意的方法
 *    Object 类型进行类型检查，不能随意调用方法，即便赋予的值真的有这些方法
 */
let any1 = '卫庄';
let obj1 = '盖聂';
any1.substring(0);
// obj1.substring(0) // 报错： [ts] Property 'substring' does not exist on type 'Object'.
/**
 * Void
 * 函数没有返回值时，其返回类型是 void
 * 声明 void 类型的变量没有用，因为只能赋值为 undefined 和 null
 */
function fun() {
    console.log('no return function, type: void');
    // return null // [ts] Type 'null' is not assignable to type 'void'
    // return
    // return undefined
}
// let unusable: void = null // strictNullChecks 为 true，会报错
/**
 * Null 和 undefined
 * 默认情况下，null 和 undefined 是所有类型的子类型。null 和 undefined 可以赋值给任何类型
 * strictNullChecks 为 true，null 和 undefined 只能赋值给 void 和他们的各自类型
 */
// let u: undefined = null // 因为可以赋值给任何类型，strictNullChecks 为 true，会报错
// let n: null = undefined // strictNullChecks 为 true，会报错
// let un: number = undefined // strictNullChecks 为 true，会报错
// let ns: string = null // strictNullChecks 为 true，会报错
let uv = undefined;
/**
 * never
 * 表示的是那些永不存在的值的类型
 * never 类型是任何类型的子类型，也可以赋值给任何类型
 * 没有类型是 never 的子类型或可以赋值给 never 类型
 * 即使 any 也不可以赋值给 never
 * 返回 never 的函数必须存在无法达到的终点
 */
function error(message) {
    throw new Error(message);
}
/**
 * object
 * 非原始类型
 * 除了 number, string, boolean, symbol, null, or undefined 之外的类型
 * strictNullChecks 不为 true 的情况下，null 和 undefined 为任何类型的子类型，所以可以通过类型检查
 */
function create(o) { }
create({ name: '卫庄' });
// create(null) // strictNullChecks 为 true，会报错
// create(undefined) // strictNullChecks 为 true，会报错
// create(23) // 报错
// create(Symbol.for('a')) // 报错
/**
 * 类型断言
 * 好比其它语言里的类型转换，但是不进行特殊的数据检查和解构
 * 1. <类型>变量
 * 2. 变量 as 类型
 * 在 TypeScript 里使用 JSX 时，只有 as 语法断言是被允许的
 */
let val1 = '卫庄';
let len1 = val1.length;
console.log(len1);
let val2 = true;
let len2 = val2.length;
console.log(len2); // undefined
