namespace getsetDecorator {
  function configurable(value: boolean) {
    return function (target: any, key: string, desc: PropertyDescriptor): PropertyDescriptor {
      desc.configurable = value
      let x = 4
      return {
        configurable: true,
        enumerable: true,
        get () {return x},
        set (v) {x = v}
      }
    }
  }
  
  class Point {
    @configurable(false)
    get x () {
      return 0
    }
  }
  console.log(Point.prototype.x)
}