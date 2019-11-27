namespace paramDecorator {
  function dd(target: any, methodName: string, index: number) {
    console.log(target, methodName, index) // Person 原型对象，say, 0
  }
  class Person {
    say (@dd name: string) {}
  }
}