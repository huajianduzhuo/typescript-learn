/**
 * 导出声明
 * @export
 * @interface StringValidator
 */
export interface StringValidator {
  isAcceptable(s: string): boolean;
}
export const MobileReg = /^[0-9]{11}$/

class MobileValidator implements StringValidator {
  isAcceptable(s: string): boolean {
    return MobileReg.test(s)
  }
}

export {MobileValidator}
export {MobileValidator as MainValidator}