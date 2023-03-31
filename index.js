import validator from "validator";

console.log('is test@test.com valid Email: ', validator.isEmail('test@test.com'));
console.log('is abcDE123 valid Email: ', validator.isEmail('abcDE123'));
