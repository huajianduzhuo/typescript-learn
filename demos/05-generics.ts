/**
 * 泛型
 * @template T 类型变量
 * @param {T} x
 * @returns {T}
 */
function identify<T>(x: T): T {
  // console.log(x.length) // 报错：Property 'length' does not exist on type 'T'.
  return x
}
let output1 = identify<string>('a')
let output2 = identify('a')

/**
 * 将泛型变量 T 当作类型的一部分使用
 * @template T 泛型变量
 * @param {T[]} x
 * @returns {T[]}
 */
function identify2<T>(x: T[]): T[] {
  return x
}
identify2(['a'])

/**
 * 泛型接口
 * @interface indentifyFn
 */
interface indentifyFn {
  <T>(x: T): T;
}
let myIdentify: indentifyFn = identify
interface indentifyFn2<T> {
  (x: T): T;
}
let myIdentify2: indentifyFn2<string> = identify

/**
 * 泛型类
 * @class genericClass
 * @template T
 */
class genericClass<T> {
  a: T;
  // static b: T; // 报错：Static members cannot reference class type parameters.
  add: (x: T, y: T) => T
}
let myGenericClass = new genericClass<number>()
myGenericClass.a = 12
myGenericClass.add = function(x, y) { return x + y }
