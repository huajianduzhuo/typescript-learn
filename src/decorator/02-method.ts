namespace methodDecorator {
  function Get(target: any, key: string, desc: PropertyDescriptor) {
    console.log(target, key, desc)
  }
  class Per {
    constructor() {}
    @Get
    say() {}
  }
}