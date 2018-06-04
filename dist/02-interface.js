/**
 * TypeScript 的核心原则之一是对值所具有的结构进行类型检查
 * 接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约
 * 可选属性
 *    属性非必需
 *    定义：在属性名后加一个 ?
 * 只读属性
 *    属性只有在对象创建时才能修改值
 *    定义：属性名前加 readonly
 * ReadonlyArray<T>: 不能更改的数组
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
