//import the module
let calc = require('./CalcModule.js');
//calling the add function
let result = calc.addExportName(2, 3);
console.log('RESULT A = '+result);

result = calc.subName(10,3);
console.log('RESULT S = '+result);