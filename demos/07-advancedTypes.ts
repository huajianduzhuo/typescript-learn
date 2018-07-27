/**
 * 交叉类型
 * 使用 &
 * @template T
 * @template U
 * @param {T} first
 * @param {U} second
 * @returns {(T & U)}
 */
function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{}
  for (let key in first) {
    ;(<any>result)[key] = first[key]
  }
  for (const key in second) {
    if (second.hasOwnProperty(key)) {
      ;(<any>result)[key] = second[key]
    }
  }
  return result
}

/**
 * 联合类型
 * 使用 |
 * @param {string} value
 * @param {(string | number)} padding
 * @returns
 */
function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value
  } else {
    return padding + value
  }
}

interface Bird {
  fly()
  layEggs()
}
interface Fish {
  swim()
  layEggs()
}
function getPet(): Bird | Fish {
  return <Bird | Fish>{}
}
let pet = getPet()
pet.layEggs()
// pet.fly() // 报错：Property 'fly' does not exist on type 'Bird | Fish'. Property 'fly' does not exist on type 'Fish'.
if ((<Bird>pet).fly) {
  ;(<Bird>pet).fly()
} else {
  ;(<Fish>pet).swim()
}

/**
 * 类型保护
 * @param {(Bird | Fish)} pet
 * @returns {pet is Fish} 类型谓词
 */
function isFish(pet: Bird | Fish): pet is Fish {
  return (<Fish>pet).swim !== undefined
}
if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly()
}

/**
 * typeof 类型保护
 * @param {string} value
 * @param {(string | number)} padding
 * @returns
 */
function padLeft2(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    padding.toFixed(2)
    return Array(padding + 1).join(' ') + value
  } else {
    padding.charAt(1)
    return padding + value
  }
}

/**
 * instanceof 类型保护
 */
interface Padder {
  getPaddingStr(): string
}
class SpaceRepeatingPadder implements Padder {
  constructor(public spaceNum: number) {}
  getPaddingStr(): string {
    return Array(this.spaceNum + 1).join(' ')
  }
}
class StringPadder implements Padder {
  constructor(public value: string) {}
  getPaddingStr(): string {
    return this.value
  }
}
function getRandomPadder(): Padder {
  return Math.random() < 0.5
    ? new SpaceRepeatingPadder(4)
    : new StringPadder('  ')
}
let padder: Padder = getRandomPadder()
if (padder instanceof SpaceRepeatingPadder) {
  // padder.value // 报错：Property 'value' does not exist on type 'SpaceRepeatingPadder'.
  console.log(padder.spaceNum)
}
if (padder instanceof StringPadder) {
  // padder.spaceNum // 报错：[ts] Property 'spaceNum' does not exist on type 'StringPadder'.
  console.log(padder.value)
}

/**
 * undefined 和 null
 * strictNullChecks 为 true，不再可以赋值给任何类型
 */
let s = 'abc'
// s = undefined // 报错：Type 'undefined' is not assignable to type 'string'
// s = null // 报错：Type 'null' is not assignable to type 'string'

/**
 * strictNullChecks 为 true，可选参数可为 undefined
 * @param a
 * @param b 可选参数类型会被自动加上 | undefined
 */
function f(a: number, b?: number): number {
  return a + (b || 0)
}
f(1, 3)
f(1, undefined)
// f(1, null) // 报错：Argument of type 'null' is not assignable to parameter of type 'number | undefined'.

/**
 * strictNullChecks 为 true，可选属性类型也会被自动加上 | undefined
 */
class C {
  constructor(public a: number, public b?: number) {}
}
let cc = new C(1, undefined)
let cc2 = new C(1, 4)
// let cc3 = new C(1, null) // 报错：Argument of type 'null' is not assignable to parameter of type 'number | undefined'.

/**
 * identifier! 类型保护
 * 从 identifier 的类型里去除了 null 和 undefined
 * @param str
 */
function fn(str: string | null) {
  return str!.charAt(0)
}

/**
 * 类型别名
 */
type s = string | number
// let sss: s = true // 报错：[ts] Type 'true' is not assignable to type 'string | number'

/**
 * 是泛型的类型别名
 */
type GenericType<T> = (c: T) => T

type Alias = { num: number }
interface Interface {
  num: number
}
declare function aliased(arg: Alias): Alias
declare function interfaced(arg: Interface): Interface

/**
 * 字符串字面量类型
 */
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'
function translate(easing: Easing) {
  if (easing === 'ease-in') {
  } else if (easing === 'ease-out') {
  } else {
  }
}
// translate('linear') // 报错：[ts] Argument of type '"linear"' is not assignable to parameter of type 'Easing'.
translate('ease-in-out')

function createElement(tagname: 'INPUT'): HTMLInputElement
function createElement(tagname: 'IMG'): HTMLImageElement
function createElement(tagname: string): Element {
  return document.createElement(tagname)
}

/**
 * 数字字面量类型
 */
type Num = 1 | 2
let nn: Num = 2

/**
 * 可辨识联合
 */
interface Square {
  kind: 'square';
  size: number;
}
interface RectAngle {
  kind: 'rectangle';
  width: number;
  height: number;
}
interface Circle {
  kind: 'circle';
  radius: number;
}
interface Triangle {
  kind: 'triangle';
  bottomWidth: number;
  height: number;
}

type Shape = Square | RectAngle | Circle | Triangle

/** 
 * 完整性检查
 */
/* function area(s: Shape): number { // 报错：Function lacks ending return statement and return type does not include 'undefined'.
  switch (s.kind) {
    case 'square':
      return s.size * s.size
    case 'rectangle':
      return s.width * s.height
    case 'circle':
      return Math.PI * s.radius ** 2
  }
} */

function assertNever(n): never {
  throw new Error('Unexpected object: ' + n)
}
function area(s: Shape): number {
  switch (s.kind) {
    case 'square':
      return s.size * s.size
    case 'rectangle':
      return s.width * s.height
    case 'circle':
      return Math.PI * s.radius ** 2
    default:
      return assertNever(s)
  }
}

/**
 * this 类型
 * @class BasicCalculator
 */
class BasicCalculator {
  public constructor (protected value: number = 0) {}
  public currentValue(): number {
    return this.value
  }
  public add(operand: number): this {
    this.value += operand
    return this
  }
  public multiply(operand: number): this {
    this.value *= operand
    return this
  }
}
class ScientificCalculator extends BasicCalculator {
  public constructor (value: number) {
    super(value)
  }
  public sin(): this {
    this.value = Math.sin(this.value)
    return this
  }
}

let v = new ScientificCalculator(2)
  .add(3)
  .multiply(6)
  .sin()
  .currentValue()

/**
 * 索引类型
 * @template T
 * @template K： T 上已知的公共属性名的联合
 * @param {T} o
 * @param {K[]} names
 * @returns {T[K][]}
 */
function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n])
}
let pers = {
  name: '赵云澜',
  age: 26
}
pluck(pers, ['name', 'age']) 
// pluck(pers, ['name', 'ds']) // 报错：Argument of type '("name" | "ds")[]' is not assignable to parameter of type '("name" | "age")[]'

