/**
 * 交叉类型
 * 使用 &
 * @template T
 * @template U
 * @param {T} first
 * @param {U} second
 * @returns {(T & U)}
 */
function extend(first, second) {
    var result = {};
    for (var key in first) {
        result[key] = first[key];
    }
    for (var key in second) {
        if (second.hasOwnProperty(key)) {
            result[key] = second[key];
        }
    }
    return result;
}
/**
 * 联合类型
 * 使用 |
 * @param {string} value
 * @param {(string | number)} padding
 * @returns
 */
function padLeft(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(" ") + value;
    }
    else {
        return padding + value;
    }
}
function getPet() {
    return {};
}
var pet = getPet();
pet.layEggs();
// pet.fly() // 报错：Property 'fly' does not exist on type 'Bird | Fish'. Property 'fly' does not exist on type 'Fish'.
if (pet.fly) {
    pet.fly();
}
else {
    pet.swim();
}
/**
 * 类型保护
 * @param {(Bird | Fish)} pet
 * @returns {pet is Fish} 类型谓词
 */
function isFish(pet) {
    return pet.swim !== undefined;
}
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
/**
 * typeof 类型保护
 * @param {string} value
 * @param {(string | number)} padding
 * @returns
 */
function padLeft2(value, padding) {
    if (typeof padding === 'number') {
        padding.toFixed(2);
        return Array(padding + 1).join(" ") + value;
    }
    else {
        padding.charAt(1);
        return padding + value;
    }
}
