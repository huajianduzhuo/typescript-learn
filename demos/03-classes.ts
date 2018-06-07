class Greeter {
  greeting: string
  constructor(msg: string) {
    this.greeting = msg
  }
  greet () {
    return 'Hello, ' + this.greeting + '!'
  }
}

class Animal {
  private name: string
  public constructor(name: string) {
    this.name = name
  }
  public move (discInMeters: number = 0) {
    console.log(`${this.name} moved ${discInMeters}m!`)
  }
}

let animal = new Animal('白凤')
// console.log(animal.name) // [ts] Property 'name' is private and only accessible within class 'Animal'.

class Cat extends Animal {
  constructor(name: string) {
    super(name)
  }
  move (discInMeters: number = 5) {
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
  public move (discInMeters: number = 0) {
    console.log(`${this.name} moved ${discInMeters}m!`)
  }
}

// let xiaodi: Animal = new Animal2('小弟') // 报错：Type 'Animal2' is not assignable to type 'Animal'.