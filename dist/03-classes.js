var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Greeter = /** @class */ (function () {
    function Greeter(msg) {
        this.greeting = msg;
    }
    Greeter.prototype.greet = function () {
        return 'Hello, ' + this.greeting + '!';
    };
    return Greeter;
}());
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (discInMeters) {
        if (discInMeters === void 0) { discInMeters = 0; }
        console.log(this.name + " moved " + discInMeters + "m!");
    };
    return Animal;
}());
var animal = new Animal('白凤');
// console.log(animal.name) // [ts] Property 'name' is private and only accessible within class 'Animal'.
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.move = function (discInMeters) {
        if (discInMeters === void 0) { discInMeters = 5; }
        console.log('climb~~~');
        _super.prototype.move.call(this, discInMeters);
    };
    return Cat;
}(Animal));
var dage = new Cat('大哥');
dage.move(10);
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name;
    }
    Animal2.prototype.move = function (discInMeters) {
        if (discInMeters === void 0) { discInMeters = 0; }
        console.log(this.name + " moved " + discInMeters + "m!");
    };
    return Animal2;
}());
// let xiaodi: Animal = new Animal2('小弟') // 报错：Type 'Animal2' is not assignable to type 'Animal'.
/**
 * protected
 * protected 属性：不能在类外被访问，但是可以在派生类访问
 * protected 构造函数：不能在类外实例化，但是可以被继承
 */
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.introduce = function () {
        console.log("Hi, I'm " + this.name + " and I work in " + this.department + "!");
    };
    return Employee;
}(Person));
// let weizhuang = new Person('卫庄') // 报错：[ts] Constructor of class 'Person' is protected and only accessible within the class declaration.
// weizhuang.name // 报错：[ts] Property 'name' is protected and only accessible within class 'Person' and its subclasses.
var genie = new Employee('盖聂', '秦国');
genie.introduce();
/**
 * readonly
 */
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.numOfLegs = 4;
        this.name = name;
    }
    return Dog;
}());
var diandian = new Dog('点点');
// diandian.name = '贝贝' // 报错：[ts] Cannot assign to 'name' because it is a constant or a read-only property.
/**
 * 参数属性
 */
var Rabbit = /** @class */ (function () {
    function Rabbit(name) {
        this.name = name;
    }
    return Rabbit;
}());
var rabbit = new Rabbit('小兔子');
console.log(rabbit.name);
/**
 * 存取器
 */
var password = '1234';
var User = /** @class */ (function () {
    function User() {
    }
    Object.defineProperty(User.prototype, "fullname", {
        get: function () {
            return this._fullname;
        },
        set: function (name) {
            if (password && password === '0000') {
                this._fullname = name;
            }
            else {
                console.log('Error: Unauthorized update of employee!');
            }
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
var user1 = new User();
user1.fullname = '岑岑';
/**
 * 静态属性
 */
var Qin = /** @class */ (function () {
    function Qin() {
    }
    Qin.say = function () {
        console.log('赳赳老秦，共赴国难！');
    };
    Qin.king = '嬴政';
    return Qin;
}());
Qin.say();
/**
 * 抽象类
 */
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.ring = function (sound) {
        console.log("say " + sound + "~~~");
    };
    return Vehicle;
}());
// let veh = new Vehicle() // 报错：[ts] Cannot create an instance of an abstract class.
var Train = /** @class */ (function (_super) {
    __extends(Train, _super);
    function Train() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Train.prototype.move = function () {
        console.log('The train moved 10km!');
    };
    Train.prototype.run = function () {
        console.log('The train runned');
    };
    return Train;
}(Vehicle));
var car = new Train();
car.move();
car.ring('wu wu ');
// car.run() // 报错：[ts] Property 'run' does not exist on type 'Vehicle'.
var Point2 = /** @class */ (function () {
    function Point2() {
    }
    return Point2;
}());
var point3d = { x: 1, y: 2, z: 3 };
