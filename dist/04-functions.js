/**
 * 函数类型包括 参数类型 和 返回值类型
 * @param x
 * @param y
 */
var add = function (x, y) {
    return x + y;
};
var add2 = function (x, y) {
    return x + y;
};
/**
 * 参数必须是两个
 * @param firstName
 * @param lastName
 */
function sayName(firstName, lastName) {
    return firstName + " " + lastName;
}
sayName('赵', '云澜');
/**
 * 在参数名后添加 ?，实现 可选参数
 * @param firstName
 * @param lastName
 */
function sayName2(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
sayName2('赵', '云澜');
sayName2('赵');
/**
 * 为参数添加默认值
 * 带默认值的参数都是可选的
 * @param firstName
 * @param lastName
 */
function sayName3(firstName, lastName) {
    if (lastName === void 0) { lastName = '处长'; }
    return firstName + " " + lastName;
}
sayName3('赵', '云澜');
sayName3('赵');
/**
 * 使用 ... 定义剩余参数
 * @param firstName
 * @param restOfNames 剩余参数，数组
 */
function sayName4(firstName) {
    var restOfNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfNames[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfNames.join(' ');
}
sayName4('赵');
sayName4('赵', '云澜');
sayName4('赵', '云', '澜');
var deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickerCard = cardPicker();
console.log("card: " + pickerCard.card + ", suit: " + pickerCard.suit);
/**
 * this 参数，假的参数
 * @param {Card} this
 * @param {string} extraParam
 */
function testThis(extraParam) {
    console.log(this.card, extraParam);
}
testThis.bind({ suit: 'a', card: 10 })('cc');
function overloadTest(x) {
    if (typeof x === 'object') {
        return x.firstName + " " + x.lastName;
    }
    else if (typeof x === 'string') {
        return { firstName: x, lastName: '云澜' };
    }
}
console.log(overloadTest('小'));
console.log(overloadTest({ firstName: '小', lastName: '云澜' }));
