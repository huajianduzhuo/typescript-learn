/**
 * 函数类型包括 参数类型 和 返回值类型
 * @param x
 * @param y
 */
let add: (baseValue: number, increment: number) => number = function(
  x: number,
  y: number
): number {
  return x + y
}

let add2 = function(x: number, y: number): number {
  return x + y
}

/**
 * 参数必须是两个
 * @param firstName
 * @param lastName
 */
function sayName(firstName: string, lastName: string) {
  return `${firstName} ${lastName}`
}
sayName('赵', '云澜')

/**
 * 在参数名后添加 ?，实现 可选参数
 * @param firstName
 * @param lastName
 */
function sayName2(firstName: string, lastName?: string) {
  if (lastName) {
    return `${firstName} ${lastName}`
  } else {
    return firstName
  }
}
sayName2('赵', '云澜')
sayName2('赵')

/**
 * 为参数添加默认值
 * 带默认值的参数都是可选的
 * @param firstName
 * @param lastName
 */
function sayName3(firstName: string, lastName = '处长') {
  return `${firstName} ${lastName}`
}
sayName3('赵', '云澜')
sayName3('赵')

/**
 * 使用 ... 定义剩余参数
 * @param firstName
 * @param restOfNames 剩余参数，数组
 */
function sayName4(firstName: string, ...restOfNames: string[]): string {
  return `${firstName} ${restOfNames.join(' ')}`
}
sayName4('赵')
sayName4('赵', '云澜')
sayName4('赵', '云', '澜')

/* 
  this 参数
  this参数是个假的参数，它出现在参数列表的最前面
*/
interface Card {
  suit: string
  card: number
}
interface Deck {
  suits: string[]
  cards: number[]
  createCardPicker(this: Deck): () => Card
}
let deck: Deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker(this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52)
      let pickedSuit = Math.floor(pickedCard / 13)
      return { suit: this.suits[pickedSuit], card: pickedCard % 13 }
    }
  }
}

let cardPicker = deck.createCardPicker()
let pickerCard = cardPicker()
console.log(`card: ${pickerCard.card}, suit: ${pickerCard.suit}`)

/**
 * this 参数，假的参数
 * @param {Card} this
 * @param {string} extraParam
 */
function testThis(this: Card, extraParam: string) {
  console.log(this.card, extraParam)
}
testThis.bind({suit: 'a', card: 10})('cc')

/**
 * 函数重载
 * @param {{firstName: string; lastName: string}} x
 * @returns {string}
 */
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
console.log(overloadTest({ firstName: '小', lastName: '云澜' }))