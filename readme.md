# typescript 学习笔记

当前学习版本为 `Typescript 2.7`

教程：[https://www.tslang.cn/docs/handbook/basic-types.html](https://www.tslang.cn/docs/handbook/basic-types.html)

## 安装与使用

**全局安装 typescript** `npm install -g typescript`

创建后缀名为 `.ts` 的文件，在该文件夹下，执行 `tsc 文件名`，得到编译后的 js 文件，运行该 js 文件

## tsconfig.json

在**项目根目录**创建 `tsconfig.json` 文件，用来指定编译选项

在拥有 tsconfig.json 文件的项目根目录下直接执行 `tsc`，则会将项目目录下所有符合条件的 typescript 文件进行编译。

### 配置

配置介绍：[https://www.tslang.cn/docs/handbook/tsconfig-json.html](https://www.tslang.cn/docs/handbook/tsconfig-json.html)

- compilerOptions：编译选项，详见下一节
- files：[]，指定包含文件路径列表
- include：[]，包含文件目录列表
- exclude：[]，排除文件列表
- extends：继承配置

### 编译选项

编译选项：[https://www.tslang.cn/docs/handbook/compiler-options.html](https://www.tslang.cn/docs/handbook/compiler-options.html)

- outDir：编译输出目录，默认与 typescript 文件同一目录
- target：编译目标语言，默认'ES3'
- removeComments：删除注释
- strictNullChecks

## 基础类型

demos：[https://github.com/huajianduzhuo/typescript-learn/blob/master/demos/01-basicTypes.ts](https://github.com/huajianduzhuo/typescript-learn/blob/master/demos/01-basicTypes.ts)

### 布尔

```javascript
let isDone: boolean = false
```

### 数字

```javascript
let decLiteral: number = 6
let hexLiteral: number = 0xf00d
```

### 字符串

```javascript
let name: string = 'bob'
```

### 数组

两种定义方式

- 类型[]
- Array<类型>

```javascript
let list1: number[] = [1, 2, 4]
let list2: Array<number> = [4, 6, 8]
```

### 元组（tuple）

元组：已知数量和类型的数组

```javascript
let t1: [string, number, boolean]
t1 = ['盖聂', 10, true]
```

### 枚举（enum）

- 相当于为对象双向定义 key（编号） 和 value（值）
- 默认 key 从 0 开始
- 可以从某一个值开始指定起始编号

```javascript
enum Color {
  RED,
  GREEN,
  BLUE
}
console.log(Color) // { '0': 'RED', '1': 'GREEN', '2': 'BLUE', RED: 0, GREEN: 1, BLUE: 2 }

// 枚举 enum 指定起始编号
enum Color2 {
  RED = 3,
  GREEN,
  BLUE
}
console.log(Color2) // { '3': 'RED', '4': 'GREEN', '5': 'BLUE', RED: 3, GREEN: 4, BLUE: 5 }

// 手动赋值
enum Color3 {
  RED = 3,
  GREEN = 7,
  BLUE = 1
}
console.log(Color3) // { '1': 'BLUE', '3': 'RED', '7': 'GREEN', RED: 3, GREEN: 7, BLUE: 1 }

// 从中间指定起始编号
enum Color4 {
  RED,
  GREEN = 5,
  BLUE
}
console.log(Color4) // { '0': 'RED', '5': 'GREEN', '6': 'BLUE', RED: 0, GREEN: 5, BLUE: 6 }
```

### any

不清楚变量类型，可以使用 any

any 类型，可以赋予任何类型的值，不进行类型检查

**any 与 Object 类型的异同点：**

- Object 类型也可以赋予任何类型的值
- any 类型不进行类型检查，可以调用任意的方法
- Object 类型进行类型检查，不能随意调用方法，即便赋予的值真的有这些方法

```javascript
let any1: any = '卫庄'
let obj1: Object = '盖聂'
any1.substring(0)
// obj1.substring(0) // 报错： [ts] Property 'substring' does not exist on type 'Object'.
```

### void

函数没有返回值时，其返回类型是 void

声明 void 类型的变量没有用，因为只能赋值为 undefined 和 null

```javascript
function fun(): void {
  console.log('no return function, type: void')
  // return null // strictNullChecks 为 true，报错 [ts] Type 'null' is not assignable to type 'void'
  // return
  // return undefined
}

// let unusable: void = null // strictNullChecks 为 true，会报错
```

### Null 和 Undefined

默认情况下，null 和 undefined 是所有类型的子类型。null 和 undefined 可以赋值给任何类型

strictNullChecks 为 true，null 和 undefined 只能赋值给 void 和他们的各自类型

```javascript
// let u: undefined = null // 因为可以赋值给任何类型，strictNullChecks 为 true，会报错
// let n: null = undefined // strictNullChecks 为 true，会报错
// let un: number = undefined // strictNullChecks 为 true，会报错
// let ns: string = null // strictNullChecks 为 true，会报错
let uv: void = undefined
```

### never

- 表示的是那些永不存在的值的类型
- never 类型是任何类型的子类型，也可以赋值给任何类型
- 没有类型是 never 的子类型或可以赋值给 never 类型
- 即使 any 也不可以赋值给 never
- 返回 never 的函数必须存在无法达到的终点

```javascript
function error(message: string): never {
  throw new Error(message)
}
```

### object

表示非原始类型，即除了 number, string, boolean, symbol, null, or undefined 之外的类型

strictNullChecks 不为 true 的情况下，null 和 undefined 为任何类型的子类型，所以可以通过类型检查

```javascript
function create(o: object): void {}
create({ name: '卫庄' })
// create(null) // strictNullChecks 为 true，会报错
// create(undefined) // strictNullChecks 为 true，会报错
// create(23) // 报错
// create(Symbol.for('a')) // 报错
```

### 类型断言

好比其它语言里的类型转换，但是不进行特殊的数据检查和解构

两种类型断言方式：

- <类型>变量
- 变量 as 类型

> 在 TypeScript 里使用 JSX 时，只有 as 语法断言是被允许的

```javascript
let val1: any = '卫庄'
let len1: number = (<string>val1).length
console.log(len1)
let val2: any = true
let len2: number = (val2 as string).length
console.log(len2) // undefined
```

## 接口

demos：[https://github.com/huajianduzhuo/typescript-learn/blob/master/demos/02-interface.ts](https://github.com/huajianduzhuo/typescript-learn/blob/master/demos/02-interface.ts)

TypeScript 的核心原则之一是对值所具有的结构进行类型检查，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约

我们传入的对象参数实际上会包含很多属性，但是编译器只会检查那些必需的属性是否存在，并且其类型是否匹配。

> 接口中每个属性后面不是逗号，而是分号，分号可省略

```javascript
interface LabelledValue {
  label: string;
}
function printLabel(labeledObj: LabelledValue) {
  console.log(labeledObj.label)
}
const obj2 = {
  name: '盖聂',
  label: '卫聂'
}
printLabel(obj2)
```

### 可选属性

指非必需的属性，可存在可不存在

**定义**：在属性名后加一个 ?

```javascript
interface LabelledValue {
  label: string
  name?: string
}
```

### 只读属性

只读属性只有在对象创建时才能修改值

**定义**：属性名前加 readonly

```javascript
interface Point {
  readonly x: number
  y: number
}
let p1: Point = { x: 10, y: 20 }
//  p1.x = 30 // 报错
p1.y = 30
```

### ReadonlyArray<T>

TypeScript 具有 ReadonlyArray<T> 类型，它与 Array<T> 相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改

```javascript
let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a
ro[0] = 12 // error!
ro.push(5) // error!
ro.length = 100 // error!
a = ro // error!
```

上面代码的最后一行，可以看到就算把整个 ReadonlyArray 赋值到一个普通数组也是不可以的。但是你可以用类型断言重写：

```javascript
a = ro as number[]
```

### 额外的属性检查

在 typescript 中，**对象字面量**会被特殊对待而且会经过额外属性检查，当将它们赋值给变量或作为参数传递的时候。

如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。

```javascript
interface SquareConfig {
  color?: string
  width?: number
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

const square = createSquare({yanse: 'lightblue', width: 12})
// 报错：'yanse' does not exist in type 'SquareConfig'.
```

**绕过这些检查的方式：**

- 使用类型断言

```javascript
const square = createSquare({yanse: 'lightblue', width: 12} as SquareConfig)
```

- 为接口添加索引签名，表示该接口可以拥有任意数量的属性

```javascript
interface SquareConfig {
  color?: string
  width?: number
  [propName: string]: any // 索引签名
}
```

- 将字面量对象赋值给一个变量，并使用变量

```javascript
const squareOption = { yanse: 'lightblue', width: 12 }
const square = createSquare(squareOption)
```

### 函数类型

接口不止可以描述具有属性的普通对象的外形，也可以描述函数的类型

接口描述函数类型，就像是一个只拥有参数列表和返回值类型的函数定义，参数列表里的每一个参数都要有名字和类型

```javascript
interface SearchFunc {
  (source: string, search: string): boolean;
}

let mySearch: SearchFunc
mySearch = function(source: string, search: string): boolean {
  let index = source.search(search)
  return index > -1
}
```

* 函数的参数名不需要与接口里定义的名字相匹配
* 函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的

```javascript
let mySearch2: SearchFunc
mySearch2 = function(src: string, sub: string): boolean {
  let index = src.search(sub)
  return index > -1
}
```

### 可索引的类型

接口也可以描述可以通过索引得到的类型

具有索引签名，描述索引的类型，以及对应的返回值的类型

支持两种索引签名：数字、字符串

> 数字索引的返回值必须是字符串索引返回值类型的子类型

```javascript
interface StringArray {
  [index: number]: string
}

let arr: StringArray
arr = ['卫庄', '盖聂']
```

* 索引类型可以约束某一类型的属性的返回值类型。如下，因为 string 类型的属性设定了返回值类型为 string，所以属性 name 的返回值为 number 就会报错

```javascript
interface StringArray {
  [index: number]: string
  [key: string]: string
  name: number // 报错：[ts] Property 'name' of type 'number' is not assignable to string index type 'string'.
}
```

* 将索引签名设置为只读，可以放在给索引赋值

```javascript
interface StringArray {
  readonly [index: number]: string
}
let arr: StringArray
arr = ['卫庄', '盖聂']
// arr[2] = "鲨齿" // 报错：数字索引签名只读
```