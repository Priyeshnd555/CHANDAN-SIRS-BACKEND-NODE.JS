
// import the module and use it 
const calc = require('./userDefinedModules/calc');

// we are calling functions inside the userDefined Module
console.log("add",calc.add(3,5))
console.log("mul",calc.mul(3,5))