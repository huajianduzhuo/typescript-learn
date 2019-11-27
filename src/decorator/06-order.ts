function forClass() {
  console.log('for class')
  return function (target) {
    console.log('for class inner')
  }
}
function forMethod() {
  console.log('for method')
  return function (target, key, desc) {
    console.log('for method inner')
  }
}
function forGetSet() {
  console.log('for get set')
  return function (target, key, desc) {
    console.log('for get set inner')
  }
}
function forProperty() {
  console.log('for property')
  return function (target, key) {
    console.log('for property inner')
  }
}
function forParam() {
  console.log('for param')
  return function (target, key, index) {
    console.log('for param inner')
  }
}
@forClass()
class Point {
  @forProperty() x: number
  @forGetSet() get y () {return 0}
  @forMethod() setX (@forParam() x: number) {this.x = x}
}