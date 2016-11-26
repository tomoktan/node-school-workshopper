const fs = require('fs');
fs.readFile(process.argv[2], 'utf8', (err, value) => {
  if (err) throw err;
  console.log(value.split('\n').length -1);  
});
