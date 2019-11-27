namespace propertyDecorator {
  function defaultValue(value: string) {
    return function (target, key) {
      target[key] = value
    }
  }
  class Person {
    @defaultValue('white') name: string
  }
  console.log(new Person().name) // white
}