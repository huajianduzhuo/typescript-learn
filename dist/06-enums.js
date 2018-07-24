/**
 * 数字枚举
 * @enum {number}
 */
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 1] = "UP";
    Direction[Direction["DOWN"] = 2] = "DOWN";
    Direction[Direction["LEFT"] = 3] = "LEFT";
    Direction[Direction["RIGHT"] = 4] = "RIGHT";
})(Direction || (Direction = {}));
console.log(Direction.DOWN);
/**
 * 字符串枚举
 * @enum {number}
 */
var ABO;
(function (ABO) {
    ABO["A"] = "alpha";
    ABO["B"] = "beta";
    ABO["O"] = "omega";
})(ABO || (ABO = {}));
/**
 * 异构枚举
 * @enum {number}
 */
var HeterogeneousEnums;
(function (HeterogeneousEnums) {
    HeterogeneousEnums[HeterogeneousEnums["N"] = 0] = "N";
    HeterogeneousEnums["Y"] = "yes";
})(HeterogeneousEnums || (HeterogeneousEnums = {}));
var E;
(function (E) {
    E[E["X"] = 3] = "X";
    E[E["Y"] = 4] = "Y";
})(E || (E = {}));
/**
 * 计算的和常量成员
 * @enum {number}
 */
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = '123'.length] = "G";
})(FileAccess || (FileAccess = {}));
var enums = [1 /* A */, 2 /* B */];
