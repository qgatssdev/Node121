const fs = require('fs');

fs.readFile(process.argv[2], (err, words) => {
  if (err) throw err;
  let solution = words.toString().split('\n').length - 1;
  console.log(solution);
});
