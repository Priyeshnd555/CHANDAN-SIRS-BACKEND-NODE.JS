
/// we have installed validator Library using from 
//we have to do "npm i validator"

const validator = require('validator');

const isValid = validator.isEmail("priyesh@gmail.com");

console.log("is Email valid", isValid);