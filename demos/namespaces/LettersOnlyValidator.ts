/// <reference path="./Validation.ts" />

namespace Validation {
  let letterRegexp = /^[A-Za-z]+$/
  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string): boolean {
      return letterRegexp.test(s)
    }
  }
}