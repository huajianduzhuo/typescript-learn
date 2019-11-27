import {Person} from './a'

let baiyu: Person = {
  name: '白宇',
  age: 29
}
console.log(baiyu.name)
class P {
  a: string = 'aaa'
  constructor (public b: string){}
  fn () {
    console.log(this.b)
  }
}