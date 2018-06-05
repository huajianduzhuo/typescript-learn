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
const obj2 = {
    name: '盖聂',
    label: '卫聂'
};
printLabel(obj2);
let p1 = { x: 10, y: 20 };
//  p1.x = 30 // 报错
p1.y = 30;
function createSquare(squareConfig) {
    let square = { color: 'black', area: 100 };
    if (squareConfig.color) {
        square.color = squareConfig.color;
    }
    if (squareConfig.width) {
        square.area = squareConfig.width * squareConfig.width;
    }
    return square;
}
// const square = createSquare({yanse: 'lightblue', width: 12} as SquareConfig)
const squareOption = { yanse: 'lightblue', width: 12 };
const square = createSquare(squareOption);
console.log(square);
let mySearch;
mySearch = function (source, search) {
    let index = source.search(search);
    return index > -1;
};
