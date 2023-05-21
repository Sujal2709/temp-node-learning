// const amount = 12;

// if (amount < 10) {
//   console.log("Less than 10");
// } else {
//   console.log("More than 10");
// }

// console.log("hey it's my first node app");

// console.log(__dirname);
// setInterval(() => {
//   console.log("hello World");
// }, 1000);

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./1-module");
const sayHi = require("./2-module");
require("./3-module");
// const data = require('./06-alternative-flavor')
// require('./07-mind-grenade')
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
