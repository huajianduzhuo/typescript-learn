/// <reference path="node.d.ts" />
import * as path from 'path'
import axios from 'axios'
import ZipCodeValidator = require('./ZipCodeValidator')

let zipCodeValidator = new ZipCodeValidator()

path.join('./', 'Validation.ts')
axios.get('/api', data => {})