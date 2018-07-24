/**
 * 交叉类型
 * 使用 &
 * @template T
 * @template U
 * @param {T} first
 * @param {U} second
 * @returns {(T & U)}
 */
function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{}
  for (let key in first) {
    (<any>result)[key] = first[key]
  }
  for (const key in second) {
    if (second.hasOwnProperty(key)) {
      (<any>result)[key] = second[key]
    }
  }
  return result
}

/**
 * 联合类型
 * 使用 | 
 * @param {string} value
 * @param {(string | number)} padding
 * @returns
 */
function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(" ") + value
  } else {
    return padding + value
  }
}

interface Bird {
  fly();
  layEggs();
}
interface Fish {
  swim();
  layEggs();
}
function getPet(): Bird | Fish {
  return <Bird | Fish>{}
}
let pet = getPet()
pet.layEggs()
// pet.fly() // 报错：Property 'fly' does not exist on type 'Bird | Fish'. Property 'fly' does not exist on type 'Fish'.
if ((<Bird>pet).fly) {
  (<Bird>pet).fly()
} else {
  (<Fish>pet).swim()
}

/**
 * 类型保护
 * @param {(Bird | Fish)} pet
 * @returns {pet is Fish} 类型谓词
 */
function isFish(pet: Bird | Fish): pet is Fish {
  return (<Fish>pet).swim !== undefined
}
if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly()
}

/**
 * typeof 类型保护
 * @param {string} value
 * @param {(string | number)} padding
 * @returns
 */
function padLeft2(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    padding.toFixed(2)
    return Array(padding + 1).join(" ") + value
  } else {
    padding.charAt(1)
    return padding + value
  }
}