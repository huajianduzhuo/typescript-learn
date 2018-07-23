/**
 * TypeScript 的核心原则之一是对值所具有的结构进行类型检查
 * 接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约
 * 可选属性
 *    属性非必需
 *    定义：在属性名后加一个 ?
 */
function printLabel(labeledObj) {
    console.log(labeledObj.label);
    console.log(labeledObj.name);
}
var obj2 = {
    name: '盖聂',
    label: '卫聂'
};
printLabel(obj2);
var p1 = { x: 10, y: 20 };
//  p1.x = 30 // 报错
p1.y = 30;
function createSquare(squareConfig) {
    var square = { color: 'black', area: 100 };
    if (squareConfig.color) {
        square.color = squareConfig.color;
    }
    if (squareConfig.width) {
        square.area = squareConfig.width * squareConfig.width;
    }
    return square;
}
// const square = createSquare({yanse: 'lightblue', width: 12} as SquareConfig)
var squareOption = { yanse: 'lightblue', width: 12 };
var square = createSquare(squareOption);
console.log(square);
var mySearch;
mySearch = function (source, search) {
    var index = source.search(search);
    return index > -1;
};
// 函数参数名不需要与接口参数名相匹配，只要类型一致即可
var mySearch2;
mySearch2 = function (src, sub) {
    var index = src.search(sub);
    return index > -1;
};
var arr;
arr = ['卫庄', '盖聂'];
var Clock = /** @class */ (function () {
    function Clock() {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    Clock.prototype.getTime = function () {
        return this.currentTime;
    };
    return Clock;
}());
var clock = new Clock();
console.log(Object.getOwnPropertyNames(Clock.prototype)); // [ 'constructor', 'setTime' ]
console.log(Object.getOwnPropertyNames(clock)); // []
var d = {
    c: '岑岑',
    a: '灿灿',
    b: '柒夜'
};
function getCounter() {
    var counter = function (start) {
        counter.count = start;
        return "The number is " + counter.count;
    };
    counter.interval = 1;
    counter.reset = function () {
        counter.start = 0;
    };
    return counter;
}
var counter = getCounter();
counter(10);
