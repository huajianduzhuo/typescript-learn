function f() {
  console.log('f')
  return function (target) {
    console.log('f inner')
  }
}
function g() {
  console.log('g')
  return function (target) {
    console.log('g inner')
  }
}
@f()
@g()
class C {}