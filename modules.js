// console.log(arguments);
// console.log(require("module").wrapper);

const C = require("./test-module-1.js");
const calc1 = new C();
console.log(calc1.multiply(2, 5));
