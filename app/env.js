"use strict";
// Simple wrapper exposing environment variables to rest of the code.
Object.defineProperty(exports, "__esModule", { value: true });
var jetpack = require('fs-jetpack');
// The variables have been written to `env.json` by the build process.
var env = jetpack.cwd(__dirname).read('env.json', 'json');
exports.default = env;
