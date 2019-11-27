function path(prePath: string) {
  return function (target: new () => object) {
    target.prototype.prePath = prePath
  }
}
@path('src')
class Hello {}