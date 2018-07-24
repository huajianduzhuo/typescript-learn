/**
 * 数字枚举
 * @enum {number}
 */
enum Direction {
  UP = 1,
  DOWN,
  LEFT,
  RIGHT
}
console.log(Direction.DOWN)

/**
 * 字符串枚举
 * @enum {number}
 */
enum ABO {
  A = 'alpha',
  B = 'beta',
  O = 'omega'
}

/**
 * 异构枚举
 * @enum {number}
 */
enum HeterogeneousEnums {
  N = 0,
  Y = 'yes'
}

enum E {
  X = Direction.LEFT,
  Y
}

/**
 * 计算的和常量成员
 * @enum {number}
 */
enum FileAccess {
  // constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = '123'.length
}

/**
 * 常量枚举
 * @enum {number}
 */
const enum Enum {
  A = 1,
  B = A * 2
}
let enums = [Enum.A, Enum.B]

/**
 * 外部枚举
 * @enum {number}
 */
declare enum Enum2 {
  A = 1,
  B,
  C = 2,
}