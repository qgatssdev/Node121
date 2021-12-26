const fs = require('fs');

var words = fs.readFileSync(process.argv[2]);

let solution = words.toString().split('\n').length - 1;

console.log(solution);
