/// <reference path="./Validation.ts" />
/// <reference path="./LettersOnlyValidator.ts" />
/// <reference path="./ZipCodeValidator.ts" />

let strings = ['Hello', '10000', '123']

let validators: {[s: string]: Validation.StringValidator;} = {}
validators['Letters Only'] = new Validation.LettersOnlyValidator()
validators['Zip Code'] = new Validation.ZipCodeValidator()

for (const s of strings) {
  for (const name in validators) {
    const isMatch = validators[name].isAcceptable(s)
    console.log(`${s} ${isMatch ? 'matches' : 'does not match'} ${name}`)
  }
}