import {StringValidator} from './Validation'

const zipCodeReg = /^[0-9]{6}$/

class ZipCodeValidator implements StringValidator {
  isAcceptable (s: string): boolean {
    return zipCodeReg.test(s)
  }
}

export = ZipCodeValidator