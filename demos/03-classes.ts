class Greeter {
  greeting: string
  constructor(msg: string) {
    this.greeting = msg
  }
  greet() {
    return 'Hello, ' + this.greeting + '!'
  }
}

class Animal {
  private name: string
  public constructor(name: string) {
    this.name = name
  }
  public move(discInMeters: number = 0) {
    console.log(`${this.name} moved ${discInMeters}m!`)
  }
}

let animal = new Animal('白凤')
// console.log(animal.name) // [ts] Property 'name' is private and only accessible within class 'Animal'.

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

class Animal2 {
  private name: string
  public constructor(name: string) {
    this.name = name
  }
  public move(discInMeters: number = 0) {
    console.log(`${this.name} moved ${discInMeters}m!`)
  }
}

// let xiaodi: Animal = new Animal2('小弟') // 报错：Type 'Animal2' is not assignable to type 'Animal'.

/**
 * protected
 * protected 属性：不能在类外被访问，但是可以在派生类访问
 * protected 构造函数：不能在类外实例化，但是可以被继承
 */
class Person {
  protected name: string
  protected constructor(name: string) {
    this.name = name
  }
}
class Employee extends Person {
  private department: string
  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }
  introduce(): void {
    console.log(`Hi, I'm ${this.name} and I work in ${this.department}!`)
  }
}
// let weizhuang = new Person('卫庄') // 报错：[ts] Constructor of class 'Person' is protected and only accessible within the class declaration.
// weizhuang.name // 报错：[ts] Property 'name' is protected and only accessible within class 'Person' and its subclasses.
let genie = new Employee('盖聂', '秦国')
genie.introduce()

/**
 * readonly
 */
class Dog {
  readonly name: string
  readonly numOfLegs: number = 4
  constructor(name: string) {
    this.name = name
  }
}
let diandian = new Dog('点点')
// diandian.name = '贝贝' // 报错：[ts] Cannot assign to 'name' because it is a constant or a read-only property.

/**
 * 参数属性
 */
class Rabbit {
  constructor(public name: string) {}
}
let rabbit = new Rabbit('小兔子')
console.log(rabbit.name)

/**
 * 存取器
 */
let password = '1234'
class User {
  private _fullname: string
  get fullname(): string {
    return this._fullname
  }
  set fullname(name: string) {
    if (password && password === '0000') {
      this._fullname = name
    } else {
      console.log('Error: Unauthorized update of employee!')
    }
  }
}
let user1 = new User()
user1.fullname = '岑岑'

/**
 * 静态属性
 */
class Qin {
  static king: string = '嬴政'
  static say() {
    console.log('赳赳老秦，共赴国难！')
  }
}
Qin.say()

/**
 * 抽象类
 */
abstract class Vehicle {
  abstract move(): void
  ring(sound: string): void {
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

class Point2 {
  x: number
  y: number
}

interface Point3d extends Point2 {
  z: number
}

let point3d: Point3d = { x: 1, y: 2, z: 3 }
