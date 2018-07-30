"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="node.d.ts" />
var path = require("path");
var axios_1 = require("axios");
var ZipCodeValidator = require("./ZipCodeValidator");
var zipCodeValidator = new ZipCodeValidator();
path.join('./', 'Validation.ts');
axios_1.default.get('/api', function (data) { });
