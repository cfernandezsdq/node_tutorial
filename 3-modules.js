// CommonJS, every file is a module.
// Modules - Encapsulate Code (Only share minimun)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-greanade');
console.log(data.items);
sayHi('Veronica');
sayHi(names.john);
sayHi(names.peter);