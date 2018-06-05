/**
 * TypeScript 的核心原则之一是对值所具有的结构进行类型检查
 * 接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约
 * 可选属性
 *    属性非必需
 *    定义：在属性名后加一个 ?
 */

interface LabelledValue {
  label: string
  name?: string
}

function printLabel(labeledObj: LabelledValue) {
  console.log(labeledObj.label)
  console.log(labeledObj.name)
}
const obj2 = {
  name: '盖聂',
  label: '卫聂'
}
printLabel(obj2)

/**
 * 只读属性
 *    属性只有在对象创建时才能修改值
 *    定义：属性名前加 readonly
 * ReadonlyArray<T>: 不能更改的数组
 */
interface Point {
  readonly x: number
  y: number
}
let p1: Point = { x: 10, y: 20 }
//  p1.x = 30 // 报错
p1.y = 30

/**
 * 额外的属性检查
 */
interface SquareConfig {
  color?: string
  width?: number
  [propName: string]: any // 索引签名
}

function createSquare(
  squareConfig: SquareConfig
): { color: string; area: number } {
  let square = { color: 'black', area: 100 }
  if (squareConfig.color) {
    square.color = squareConfig.color
  }
  if (squareConfig.width) {
    square.area = squareConfig.width * squareConfig.width
  }
  return square
}

// const square = createSquare({yanse: 'lightblue', width: 12} as SquareConfig)
const squareOption = {yanse: 'lightblue', width: 12}
const square = createSquare(squareOption)
console.log(square)

/** 
 * 函数类型
 */
interface SearchFunc {
  (source: string, search: string): boolean
}

let mySearch: SearchFunc
mySearch = function(source: string, search: string): boolean {
  let index = source.search(search)
  return index > -1
}
// 函数参数名不需要与接口参数名相匹配，只要类型一致即可
let mySearch2: SearchFunc
mySearch2 = function(src: string, sub: string): boolean {
  let index = src.search(sub)
  return index > -1
}

/** 
 * 索引签名
 */
interface StringArray {
  readonly [index: number]: string
  // [key: string]: string
  // name: number // 报错：[ts] Property 'name' of type 'number' is not assignable to string index type 'string'.
}

let arr: StringArray
arr = ['卫庄', '盖聂']
// arr[2] = "鲨齿" // 报错：数字索引签名只读