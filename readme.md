# typescript 学习笔记

当前学习版本为 `Typescript 2.7`

教程：[https://www.tslang.cn/docs/handbook/basic-types.html](https://www.tslang.cn/docs/handbook/basic-types.html)

## 安装与使用

**全局安装 typescript**

`npm install -g typescript`

**编译**

创建后缀名为 `.ts` 的文件，在该文件夹下，执行 `tsc 文件名`，得到编译后的 js 文件，运行该 js 文件

## tsconfig.json

在**项目根目录**创建 `tsconfig.json` 文件，用来指定编译选项

在拥有 tsconfig.json 文件的项目根目录下直接执行 `tsc`，则会将项目目录下所有符合条件的 typescript 文件进行编译。

执行 `tsc -w`，可以监视文件改动，文件保存后实时编译

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

- 函数的参数名不需要与接口里定义的名字相匹配
- 函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的

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
  [index: number]: string;
}

let arr: StringArray
arr = ['卫庄', '盖聂']
```

- 索引类型可以约束某一类型的属性的返回值类型。如下，因为 string 类型的属性设定了返回值类型为 string，所以属性 name 的返回值为 number 就会报错

```javascript
interface StringArray {
  [index: number]: string
  [key: string]: string
  name: number // 报错：[ts] Property 'name' of type 'number' is not assignable to string index type 'string'.
}
```

- 将索引签名设置为只读，可以防止给索引赋值

```javascript
interface StringArray {
  readonly [index: number]: string
}
let arr: StringArray
arr = ['卫庄', '盖聂']
// arr[2] = "鲨齿" // 报错：数字索引签名只读
```

### 类类型

接口也可以用来明确的强制一个类符合某种契约

类实现接口：`implements`

接口定义类的方法：`方法名(参数列表)`

```javascript
interface ClockInterface {
  currentTime: Date
  setTime(d: Date)
}
class Clock implements ClockInterface {
  currentTime: Date
  setTime(d: Date) {
    this.currentTime = d
  }
  getTime() {
    return this.currentTime
  }
}
```

> 接口描述了类的公共部分，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员。

### 继承接口

- 接口也可以相互继承
- 一个接口可以继承多个接口

```javascript
interface int1 {
  a: string;
}
interface int2 {
  b: string;
}
interface int3 extends int1, int2 {
  c: string;
}
let d: int3 = {
  c: '岑岑',
  a: '灿灿',
  b: '柒夜'
}
```

### 混合类型

接口可以描述多种类型

比如：一个对象同时作为对象和函数使用

```javascript
interface Counter {
  (start: number): string
  interval: number
  count: number
  reset (): void
}
function getCounter (): Counter {
  let counter = <Counter>function(start: number) {
    counter.count = start
    return `The number is ${counter.count}`
  }
  counter.interval = 1
  counter.reset = function () {
    counter.start = 0
  }
  return counter
}
let counter = getCounter()
counter(10)
```

### 接口继承类

当接口继承了一个类类型时，它会继承类的成员但不包括其实现。

接口同样会继承到类的 private 和 protected 成员。这意味着这个接口类型只能被这个类或其子类所实现。

```javascript
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// 错误：“Image”类型缺少“state”属性。
class Image implements SelectableControl {
    select() { }
}

class Location {

}
```

## 类

demos：[https://github.com/huajianduzhuo/typescript-learn/blob/master/demos/03-classes.ts](https://github.com/huajianduzhuo/typescript-learn/blob/master/demos/03-classes.ts)

> 注意：typescript 中的类，与 ES6 中类的定义方式不一样，不能想当然的认为两种是一样的写法！！！

```javascript
class Greeter {
  greeting: string
  constructor(msg: string) {
    this.greeting = msg
  }
  greet() {
    return 'Hello, ' + this.greeting + '!'
  }
}
```

### 继承

派生类：子类；

基类：超类

派生类的构造函数里**必须调用** `super()`，即基类的构造函数。并且，必须在构造函数里**访问 this 之前**调用 super()。

派生类的构造函数仍然可以省略，会默认调用基类的构造函数。

派生类可以重写基类的方法。

```javascript
class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  move(discInMeters: number = 0) {
    console.log(`${this.name} moved ${discInMeters}m!`)
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name)
  }
  move(discInMeters: number = 5) {
    console.log('climb~~~')
    super.move(discInMeters)
  }
}

let dage: Animal = new Cat('大哥')
dage.move(10)
```

如上面定义变量 dage 的方法，dage 为 Cat 类的实例，但是类型可以是基类 Animal。

### 修饰符 public

public 是默认的修饰符，成员都默认为 public

```javascript
class Animal {
  public name: string
  public constructor(name: string) {
    this.name = name
  }
  public move (discInMeters: number = 0) {
    console.log(`${this.name} moved ${discInMeters}m!`)
  }
}
```

### 修饰符 private

当成员被标记成 private 时，它就不能在声明它的类的外部访问。

```javascript
class Animal {
  private name: string
  public constructor(name: string) {
    this.name = name
  }
}

let animal = new Animal('白凤')
console.log(animal.name) // 报错：[ts] Property 'name' is private and only accessible within class 'Animal'.
```

> 虽然访问 private 成员 typescript 检测会到错误，编译时报错，但是编译出的 javascript 文件仍能正常执行

TypeScript 使用的是结构性类型系统。 当我们比较两种不同的类型时，并不在乎它们从何处而来，如果所有成员的类型都是兼容的，我们就认为它们的类型是兼容的。

然而，当我们比较带有 private 或 protected 成员的类型的时候，情况就不同了。 如果其中一个类型里包含一个 private 成员，那么只有当另外一个类型中也存在这样一个 private 成员， 并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的。 对于 protected 成员也使用这个规则。

```javascript
class Animal {
  private name: string
  public constructor(name: string) {
    this.name = name
  }
}

class Animal2 {
  private name: string
  public constructor(name: string) {
    this.name = name
  }
}

let xiaodi: Animal = new Animal2('小弟') // 报错：Type 'Animal2' is not assignable to type 'Animal'.
```

如上，因为含有私有属性 name，所以尽管两个类结构一模一样，但是仍然不能将 Animal2 的实例赋值给 Animal 类型的变量。如果将 name 的属性改为 public，则不会报错。

### 修饰符 protected

protected 与 private 相似，不同的是，**protected 成员在派生类中仍然可以访问**。

```javascript
class Person {
  protected name: string
  constructor(name: string) {
    this.name = name
  }
}
class Employee extends Person {
  private department: string
  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }
  introduce (): void {
    console.log(`Hi, I'm ${this.name} and I work in ${this.department}!`)
  }
}
let weizhuang = new Person('卫庄')
// weizhuang.name // 报错：[ts] Property 'name' is protected and only accessible within class 'Person' and its subclasses.
let genie = new Employee('盖聂', '秦国')
genie.introduce()
```

构造函数也可以被标记成 protected。 这意味着这个类**不能在包含它的类外被实例化，但是能被继承**。

```javascript
class Person {
  protected name: string
  protected constructor(name: string) {
    this.name = name
  }
}
// let weizhuang = new Person('卫庄') // 报错：[ts] Constructor of class 'Person' is protected and only accessible within the class declaration.
```

### 修饰符 readonly

readonly 将属性设置为只读，初始化后不可修改。

初始化方式：

- 声明时
- 构造函数里

```javascript
class Dog {
  readonly name: string
  readonly numOfLegs: number = 4
  constructor(name: string) {
    this.name = name
  }
}
let diandian = new Dog('点点')
diandian.name = '贝贝' // 报错：[ts] Cannot assign to 'name' because it is a constant or a read-only property.
```

### 参数属性

通过给构造函数添加一个限定符来声明参数属性，可以方便的在一个地方定义并初始化一个成员。

简化了先声明一个属性，构造函数接收参数，然后将参数的值赋值给属性的步骤。

public 类型属性，**public 不可省略**，否则便是构造函数接收一个参数，但是不会赋值给成员。

```javascript
class Rabbit {
  constructor(public name: string) {
  }
}
```

如上编译结果为：

```javascript
class Rabbit {
  constructor(name) {
    this.name = name
  }
}
```

### 存取器

通过 getters/setters 截取对对象成员的访问

使用存取器需要注意：

- 编译器设置为输出 ECMAScript 5 或更高，不支持降级到 ECMAScript 3
- 只带有 get 不带有 set 的存取器自动被推断为 readonly

```javascript
let password = '1234'
class User {
  private _fullname: string
  get fullname (): string {
    return this._fullname
  }
  set fullname (name: string) {
    if (password && password === '0000') {
      this._fullname = name
    } else {
      console.log("Error: Unauthorized update of employee!")
    }
  }
}
let user1 = new User()
user1.fullname = '岑岑' // Error: Unauthorized update of employee!
```

### 静态属性

静态属性：存在于类本身上而不是类实例上的属性

```javascript
class Qin {
  static king: string = '嬴政'
  static say() {
    console.log('赳赳老秦，共赴国难！')
  }
}
Qin.say()
```

编译后：

```javascript
class Qin {
  static say() {
    console.log('赳赳老秦，共赴国难！')
  }
}
Qin.king = '嬴政'
Qin.say()
```

### 抽象类

抽象类做为其它派生类的**基类**使用。 它们一般**不会直接被实例化**。

- 不同于接口，抽象类**可以包含成员的实现细节**。

- `abstract` 关键字是用于定义**抽象类**和在抽象类内部定义**抽象方法**。

- 不可以创建抽象类的实例。

- 创建派生类的实例，变量的类型可以是抽象类。但是这样如果派生类中包含抽象类中不存在的方法，则无法调用。

抽象类中的抽象方法：

- 与接口类似，都是只包含方法签名，不包含方法体
- 必需包含 abstract 关键字，可以有访问修饰符
- 必须在派生类中实现
- 抽象方法只能存在于抽象类中

```javascript
abstract class Vehicle {
  abstract move(): void
  ring (sound: string): void {
    console.log(`say ${sound}~~~`)
  }
}
// let veh = new Vehicle() // 报错：[ts] Cannot create an instance of an abstract class.
class Train extends Vehicle {
  move(): void {
    console.log('The train moved 10km!')
  }
  run(): void {
    console.log('The train runned')
  }
}
let car: Vehicle = new Train()
car.move()
car.ring('wu wu ')
// car.run() // 报错：[ts] Property 'run' does not exist on type 'Vehicle'.
```

### 把类当接口使用

类定义会创建两个东西：类的实例类型和一个构造函数。 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。

> 接口可以继承类

```javascript
class Point {
  x: number
  y: number
}

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 }
```

## 函数

demos：[https://github.com/huajianduzhuo/typescript-learn/blob/master/demos/04-functions.ts](https://github.com/huajianduzhuo/typescript-learn/blob/master/demos/04-functions.ts)

### 函数类型

函数类型包含两部分：参数类型和返回值类型。函数的类型只是由**参数类型和返回值**组成的。

只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确。

对于返回值，我们在函数和返回值类型之前使用( => )符号，使之清晰明了。返回值类型是函数类型的必要部分，如果函数没有返回任何值，你也必须指定返回值类型为 void 而不能留空。

```ts
let add: (baseValue: number, increment: number) => number = function (x: number, y: number): number {
  return x + y
}

let add2 = function (x: number, y: number): number {
  return x + y
}
```

对于 add2 函数，如果你在赋值语句的一边指定了类型但是另一边没有类型的话，TypeScript 编译器会自动识别出类型。

这叫做“按上下文归类”，是类型推论的一种。

### 可选参数和默认参数

TypeScript 里的每个函数参数都是必须的。编译器检查用户是否为每个参数都传入了值。编译器还会假设只有这些参数会被传递进函数。

简短地说，**传递给一个函数的参数个数必须与函数期望的参数个数一致。**

```ts
function sayName(firstName: string, lastName: string) {
  return `${firstName} ${lastName}`
}
sayName('赵', '云澜', 'd') // 报错：Expected 2 arguments, but got 3.
sayName('赵', '云澜') // 正常
sayName('赵') // 报错：Expected 2 arguments, but got 1.
```

* 可以在参数名旁使用 ? 实现 可选参数 的功能
```ts
function sayName2(firstName: string, lastName?: string) {
  if (lastName) {
    return `${firstName} ${lastName}`
  } else {
    return firstName
  }
}
sayName2('赵', '云澜')
sayName2('赵')
sayName2('赵', '云澜', 'd') // 报错：Expected 1-2 arguments, but got 3.
```
> 可选参数必须跟在必须参数后面。

* 可以为参数提供一个默认值当用户没有传递这个参数或传递的值是 undefined 时。它们叫做有默认初始化值的参数
```ts
function sayName3(firstName: string, lastName = '处长') {
  return `${firstName} ${lastName}`
}
sayName3('赵', '云澜')
sayName3('赵')
```
> 在所有必须参数后面的带默认初始化的参数都是可选的
> 与普通可选参数不同的是，带默认值的参数不需要放在必须参数的后面。如果带默认值的参数出现在必须参数前面，用户必须明确的传入 undefined 值来获得默认值。

### 剩余参数

当不知道有多少参数会被传递进来时，可以把所有参数收集到一个变量里。

剩余参数会被当做个数不限的可选参数。可以一个都没有，同样也可以有任意个。编译器创建参数数组，名字是你在省略号（...）后面给定的名字，你可以在函数体内使用这个数组。

```ts
function sayName4(firstName: string, ...restOfNames: string[]): string {
  return `${firstName} ${restOfNames.join(' ')}`
}
sayName4('赵')
sayName4('赵', '云澜')
sayName4('赵', '云', '澜')
```

### this 参数

可以为函数提供一个显式的 this 参数。this 参数是个假的参数，它出现在参数列表的最前面。

当在 tsconfig.json 中配置 `noImplicitThis` 为 true 时，this 表达式的值为 any 类型时，会生成一个错误。提供一个具有类型的 this 参数，告诉 typescript 函数期待在那个对象上调用，就不会报错了。

```ts
interface Card {
  suit: string
  card: number
}
function testThis() {
  console.log(this.card) // 报错：'this' implicitly has type 'any' because it does not have a type annotation.
}
function testThis(this: Card) { // 提供 this 参数，就不报错了
  console.log(this.card)
}
```

> 因为 this 是假的参数，编译时不会被编译到参数中，调用时也不用传递

```ts
function testThis(this: Card, extraParam: string) {
  console.log(this.card, extraParam)
}
```

上面的 typescript 代码编译结果为

```js
function testThis(extraParam) {
  console.log(this.card, extraParam)
}
```

### 重载

有时候，函数会根据传进来的参数的类型，决定返回类型。

可以通过为一个函数提供多个函数类型定义来进行函数重载。

```ts
function overloadTest(x: {firstName: string; lastName: string}): string
function overloadTest(x: string): {firstName: string; lastName: string}
function overloadTest(x): any {
  if (typeof x === 'object') {
    return `${x.firstName} ${x.lastName}`
  } else if (typeof x === 'string') {
    return {firstName: x, lastName: '云澜'}
  }
}
console.log(overloadTest('小'))
```

为了让编译器能够选择正确的检查类型，它与 JavaScript 里的处理流程相似。它查找重载列表，尝试使用第一个重载定义。如果匹配的话就使用这个。因此，在定义重载的时候，一定要把最精确的定义放在最前面。

> function overloadTest(x): any 并不是重载列表的一部分。
> 以其他方式调用 overloadTest 会报错

## 泛型

demos：[https://github.com/huajianduzhuo/typescript-learn/blob/master/demos/05-generics.ts](https://github.com/huajianduzhuo/typescript-learn/blob/master/demos/05-generics.ts)

定义一个 identify 函数，会返回任何传入它的值：

```ts
function identify(x: any): any {
  return x
}
```

如上，第一想法是使用 any 类型。但是使用 any 类型，无法保证传入的参数类型与返回值类型一致。

可以使用**类型变量**，它是一种特殊的变量，只用于表示类型而不是值。

```ts
function identify<T>(x: T): T {
  return x
}
```

使用泛型函数：

* 传入所有的参数，包含类型参数
  ```ts
  let output1 = identify<string>('a')
  ```
* 利用**类型推论** -- 即编译器会根据传入的参数自动地帮助我们确定 T 的类型
  ```ts
  let output2 = identify('a')
  ```

### 使用泛型变量

使用泛型创建像 identity 这样的泛型函数时，编译器要求你在函数体必须正确的使用这个通用的类型。换句话说，你必须把这些参数当做是任意或所有类型。

如下使用泛型，会报错：
```ts
function identify<T>(x: T): T {
  console.log(x.length) // 报错：Property 'length' does not exist on type 'T'.
  return x
}
```
因为 x 可能是不包含 length 属性的类型，如 number 类型。

**我们可以把泛型变量 T 当做类型的一部分使用，而不是整个类型，增加了灵活性。**

```ts
function identify2<T>(x: T[]): T[] {
  return x
}
```

如上，泛型变量 T 代表的是数组类型的参数 x 中的元素的类型，而不是参数整体的类型。

### 泛型接口

为泛型函数 identify 定义泛型类型的接口

```ts
interface indentifyFn {
  <T>(x: T): T;
}
let myIdentify: indentifyFn = identify
```

可以把泛型参数当作整个接口的一个参数

```ts
interface indentifyFn2<T> {
  (x: T): T;
}
let myIdentify2: indentifyFn2<string> = identify
```

### 泛型类

```ts
class genericClass<T> {
  a: T;
  static b: T; // 报错：Static members cannot reference class type parameters.
  add: (x: T, y: T) => T
}
let myGenericClass = new genericClass<number>()
myGenericClass.a = 12
myGenericClass.add = function(x, y) { return x + y }
```

类有两部分：静态部分和实例部分。 泛型类指的是**实例部分的类型**，所以**类的静态属性不能使用这个泛型类型**。

### 泛型约束

如下，访问 x 的 length 属性，会报错，因为不能证明所有类型都有 length 属性：

```ts
function identify4<T>(x: T): T {
  console.log(x.length) // 报错：Property 'length' does not exist on type 'T'.
  return x
}
```

可以定义一个接口为类型参数 T 描述约束条件，并使用 `extends` 关键字来实现约束

```ts
interface lengthWise {
  length: number;
}
function identify4<T extends lengthWise>(x: T): T {
  console.log(x.length)
  return x
}
```

### 在泛型约束中使用类型参数

可以声明一个被其他类型参数约束的类型参数

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}
const obj = {a: 'aaa', b: 'bbb'}
getProperty(obj, 'a')
getProperty(obj, 'c') // 报错：[ts] Argument of type '"c"' is not assignable to parameter of type '"a" | "b"'
```

如上，可以保证参数 key 是 obj 的一个属性

### 在泛型里使用类类型

```ts
class BeeKeeper {
  hasMask: boolean
}
class ZooKeeper {
  nametag: string
}
class Animals {
  numLegs: number
}
class Bee extends Animals {
  keeper: BeeKeeper
}
class Lion extends Animals {
  keeper: ZooKeeper
}
function createInstance<A extends Animals>(c: new () => A): A {
  return new c()
}
createInstance(Lion).keeper.nametag // typechecks!
createInstance(Bee).keeper.hasMask // typechecks!
```

