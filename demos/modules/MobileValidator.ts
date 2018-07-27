// import {StringValidator} from './Validation'
import * as Validation from './Validation'

const MobileReg = /^[0-9]{11}$/

export class MobileValidator implements Validation.StringValidator {
  isAcceptable(s: string): boolean {
    return MobileReg.test(s)
  }
}