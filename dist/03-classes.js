class Greeter {
    constructor(msg) {
        this.greeting = msg;
    }
    greet() {
        return 'Hello, ' + this.greeting + '!';
    }
}
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(discInMeters = 0) {
        console.log(`${this.name} moved ${discInMeters}m!`);
    }
}
let animal = new Animal('白凤');
// console.log(animal.name) // [ts] Property 'name' is private and only accessible within class 'Animal'.
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    move(discInMeters = 5) {
        console.log('climb~~~');
        super.move(discInMeters);
    }
}
let dage = new Cat('大哥');
dage.move(10);
class Animal2 {
    constructor(name) {
        this.name = name;
    }
    move(discInMeters = 0) {
        console.log(`${this.name} moved ${discInMeters}m!`);
    }
}
// let xiaodi: Animal = new Animal2('小弟') // 报错：Type 'Animal2' is not assignable to type 'Animal'.
